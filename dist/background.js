/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// Background Service Worker for ImageURLcpy Extension
// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'startCapture',
        title: '开始捕获图片URL',
        contexts: ['page', 'image']
    });
});
// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'startCapture' && tab?.id) {
        chrome.tabs.sendMessage(tab.id, { action: 'startCapture' });
    }
});
// Listen for messages from popup or content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startCaptureFromPopup') {
        // Get the current active tab and send message to content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'startCapture' }, (response) => {
                    if (chrome.runtime.lastError) {
                        // Content script likely not loaded
                        console.log('Start capture failed:', chrome.runtime.lastError.message);
                        sendResponse({ success: false, error: 'Cannot connect to page' });
                        return;
                    }
                    sendResponse({ success: true });
                });
            }
            else {
                sendResponse({ success: false, error: 'No active tab' });
            }
        });
        return true; // Keep message channel open for async response
    }
    if (message.action === 'stopCaptureFromPopup') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'stopCapture' }, (response) => {
                    if (chrome.runtime.lastError) {
                        // Content script likely not loaded
                        console.log('Stop capture failed:', chrome.runtime.lastError.message);
                        sendResponse({ success: false });
                        return;
                    }
                    sendResponse({ success: true });
                });
            }
            else {
                sendResponse({ success: false });
            }
        });
        return true;
    }
    if (message.action === 'getCaptureStatus') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'getStatus' }, (response) => {
                    if (chrome.runtime.lastError) {
                        // Content script not loaded or error, assume default state
                        console.log('Get status failed:', chrome.runtime.lastError.message);
                        sendResponse({ isCapturing: false, urlCount: 0 });
                        return;
                    }
                    sendResponse(response || { isCapturing: false, urlCount: 0 });
                });
            }
            else {
                sendResponse({ isCapturing: false, urlCount: 0 });
            }
        });
        return true;
    }
});

/******/ })()
;