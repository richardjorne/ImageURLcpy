/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// Popup Script for ImageURLcpy Extension
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const statusEl = document.getElementById('status');
    const statusText = statusEl.querySelector('.status-text');
    const urlCountEl = document.getElementById('urlCount');
    const countEl = document.getElementById('count');
    // Open settings page
    settingsBtn.addEventListener('click', () => {
        chrome.runtime.openOptionsPage();
    });
    // Update UI based on capture status
    function updateUI(isCapturing, urlCount = 0) {
        if (isCapturing) {
            startBtn.style.display = 'none';
            stopBtn.style.display = 'flex';
            statusEl.classList.add('active');
            statusText.textContent = '捕获中...';
            urlCountEl.style.display = 'block';
            countEl.textContent = urlCount.toString();
        }
        else {
            startBtn.style.display = 'flex';
            stopBtn.style.display = 'none';
            statusEl.classList.remove('active');
            statusText.textContent = '待机中';
            urlCountEl.style.display = 'none';
        }
    }
    // Get current capture status
    function getCaptureStatus() {
        chrome.runtime.sendMessage({ action: 'getCaptureStatus' }, (response) => {
            if (response) {
                updateUI(response.isCapturing, response.urlCount);
            }
        });
    }
    // Start capture
    startBtn.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'startCaptureFromPopup' }, (response) => {
            if (response?.success) {
                updateUI(true, 0);
                // Close popup after starting
                window.close();
            }
        });
    });
    // Stop capture
    stopBtn.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'stopCaptureFromPopup' }, (response) => {
            if (response?.success) {
                updateUI(false);
                // Close popup after stopping
                window.close();
            }
        });
    });
    // Initial status check
    getCaptureStatus();
    // Periodically update status while popup is open
    setInterval(getCaptureStatus, 1000);
});

/******/ })()
;