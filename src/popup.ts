// Popup Script for ImageURLcpy Extension

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
    const stopBtn = document.getElementById('stopBtn') as HTMLButtonElement;
    const settingsBtn = document.getElementById('settingsBtn') as HTMLButtonElement;
    const statusEl = document.getElementById('status') as HTMLDivElement;
    const statusText = statusEl.querySelector('.status-text') as HTMLSpanElement;
    const urlCountEl = document.getElementById('urlCount') as HTMLDivElement;
    const countEl = document.getElementById('count') as HTMLSpanElement;

    // Open settings page
    settingsBtn.addEventListener('click', () => {
        chrome.runtime.openOptionsPage();
    });

    // Update UI based on capture status
    function updateUI(isCapturing: boolean, urlCount: number = 0): void {
        if (isCapturing) {
            startBtn.style.display = 'none';
            stopBtn.style.display = 'flex';
            statusEl.classList.add('active');
            statusText.textContent = '捕获中...';
            urlCountEl.style.display = 'block';
            countEl.textContent = urlCount.toString();
        } else {
            startBtn.style.display = 'flex';
            stopBtn.style.display = 'none';
            statusEl.classList.remove('active');
            statusText.textContent = '待机中';
            urlCountEl.style.display = 'none';
        }
    }

    // Get current capture status
    function getCaptureStatus(): void {
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
