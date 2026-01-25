import { I18n } from './utils/i18n';

document.addEventListener('DOMContentLoaded', async () => {
    const i18n = I18n.getInstance();
    await i18n.init();
    i18n.render();

    const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
    const stopBtn = document.getElementById('stopBtn') as HTMLButtonElement;
    const settingsBtn = document.getElementById('settingsBtn') as HTMLButtonElement;
    const statusEl = document.getElementById('status') as HTMLDivElement;
    const statusText = statusEl.querySelector('.status-text') as HTMLSpanElement;
    const urlCountEl = document.getElementById('urlCount') as HTMLDivElement;

    // Note: In HTML we replaced the inner span with a single span with ID urlCountText
    // But let's check if we want to grab that specific element to update it.
    // In my previous step, I added `id="urlCountText"`.
    const urlCountTextEl = document.getElementById('urlCountText') as HTMLSpanElement;

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
            statusText.textContent = i18n.getMessage('popup.statusCapturing');
            urlCountEl.style.display = 'block';

            // Update dynamic count
            if (urlCountTextEl) {
                urlCountTextEl.textContent = i18n.getMessage('popup.copiedCount', { count: urlCount });
            }
        } else {
            startBtn.style.display = 'flex';
            stopBtn.style.display = 'none';
            statusEl.classList.remove('active');
            statusText.textContent = i18n.getMessage('popup.statusStandby');
            urlCountEl.style.display = 'none';
        }
    }

    // Get current capture status
    function getCaptureStatus(): void {
        chrome.runtime.sendMessage({ action: 'getCaptureStatus' }, (response) => {
            // Check for runtime error (e.g. background invalid)
            if (chrome.runtime.lastError) return;

            if (response) {
                updateUI(response.isCapturing, response.urlCount);
            }
        });
    }

    // Start capture
    startBtn.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'startCaptureFromPopup' }, (response) => {
            // Check for runtime error
            if (chrome.runtime.lastError) return;

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
            // Check for runtime error
            if (chrome.runtime.lastError) return;

            if (response?.success) {
                updateUI(false);

                // If we got formatted URLs back (from Safari compatibility mode), copy them here
                if (response.formattedUrls) {
                    navigator.clipboard.writeText(response.formattedUrls).catch(err => {
                        console.error('Failed to copy in popup:', err);
                    });
                }

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
