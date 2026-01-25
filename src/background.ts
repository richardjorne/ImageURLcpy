import { I18n } from './utils/i18n';

// Background Service Worker for ImageURLcpy Extension

const i18n = I18n.getInstance();

// Function to update context menu
const updateContextMenu = async () => {
    await i18n.init(); // Reload language from storage
    chrome.contextMenus.update('startCapture', {
        title: i18n.getMessage('contextMenu.startCapture')
    }, () => {
        if (chrome.runtime.lastError) {
            // Ignore if item doesn't exist yet
        }
    });
};

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(async () => {
    await i18n.init();
    chrome.contextMenus.create({
        id: 'startCapture',
        title: i18n.getMessage('contextMenu.startCapture'),
        contexts: ['page', 'image']
    });
});

// Listen for language changes
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.language) {
        updateContextMenu();
    }
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
            } else {
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
                    sendResponse({
                        success: true,
                        formattedUrls: response?.formattedUrls
                    });
                });
            } else {
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
            } else {
                sendResponse({ isCapturing: false, urlCount: 0 });
            }
        });
        return true;
    }
});
