// Content Script for ImageURLcpy Extension

interface FormatSettings {
    singlePrefix: string;
    singleSuffix: string;
    firstPrefix: string;
    firstSuffix: string;
    middlePrefix: string;
    middleSuffix: string;
    lastPrefix: string;
    lastSuffix: string;
}

interface CaptureState {
    isCapturing: boolean;
    capturedUrls: string[];
    overlay: HTMLDivElement | null;
    stopButton: HTMLButtonElement | null;
    currentHoveredImg: HTMLImageElement | null;
}

const CONTENT_DEFAULT_SETTINGS: FormatSettings = {
    singlePrefix: '',
    singleSuffix: '',
    firstPrefix: '',
    firstSuffix: '',
    middlePrefix: '',
    middleSuffix: '',
    lastPrefix: '',
    lastSuffix: ''
};

const state: CaptureState = {
    isCapturing: false,
    capturedUrls: [],
    overlay: null,
    stopButton: null,
    currentHoveredImg: null
};

// Format URLs with prefix/suffix settings
function formatUrls(urls: string[], settings: FormatSettings): string {
    if (urls.length === 0) return '';

    if (urls.length === 1) {
        return `${settings.singlePrefix}${urls[0]}${settings.singleSuffix}`;
    }

    // Multiple URLs
    const formattedUrls: string[] = [];
    urls.forEach((url, index) => {
        if (index === 0) {
            // First URL
            formattedUrls.push(`${settings.firstPrefix}${url}${settings.firstSuffix}`);
        } else if (index === urls.length - 1) {
            // Last URL
            formattedUrls.push(`${settings.lastPrefix}${url}${settings.lastSuffix}`);
        } else {
            // Middle URLs
            formattedUrls.push(`${settings.middlePrefix}${url}${settings.middleSuffix}`);
        }
    });

    return formattedUrls.join('\n');
}

// Get format settings from storage
async function getFormatSettings(): Promise<FormatSettings> {
    return new Promise((resolve) => {
        chrome.storage.sync.get(CONTENT_DEFAULT_SETTINGS, (items) => {
            resolve(items as FormatSettings);
        });
    });
}

// Create the green overlay element
function createOverlay(): HTMLDivElement {
    const overlay = document.createElement('div');
    overlay.id = 'imageurlcpy-overlay';
    overlay.style.cssText = `
    position: absolute;
    pointer-events: none;
    background-color: rgba(74, 103, 65, 0.5);
    z-index: 2147483646;
    border-radius: 4px;
    transition: opacity 0.15s ease;
  `;
    document.body.appendChild(overlay);
    return overlay;
}

// Create the stop capture button
function createStopButton(): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = 'imageurlcpy-stop-button';
    button.textContent = '停止捕获';
    button.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2147483647;
    padding: 12px 24px;
    background: linear-gradient(135deg, #c45c4a 0%, #a84a3a 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(196, 92, 74, 0.4);
    transition: all 0.2s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 6px 20px rgba(196, 92, 74, 0.5)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 14px rgba(196, 92, 74, 0.4)';
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        stopCapture();
    });

    document.body.appendChild(button);
    return button;
}

// Show toast notification
function showToast(message: string): void {
    // Remove existing toast if any
    const existingToast = document.getElementById('imageurlcpy-toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.id = 'imageurlcpy-toast';
    toast.textContent = message;
    toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 400px;
    padding: 14px 24px;
    background: #2a2a2a;
    color: white;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    z-index: 2147483647;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    word-break: break-all;
    text-align: center;
    animation: imageurlcpy-toast-in 0.3s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    border-left: 3px solid #4a6741;
  `;

    document.body.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'imageurlcpy-toast-out 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add animation styles
function addAnimationStyles(): void {
    if (document.getElementById('imageurlcpy-styles')) return;

    const style = document.createElement('style');
    style.id = 'imageurlcpy-styles';
    style.textContent = `
    @keyframes imageurlcpy-toast-in {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
    
    @keyframes imageurlcpy-toast-out {
      from {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      to {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
      }
    }
    
    .imageurlcpy-capturing img {
      cursor: pointer !important;
    }
  `;
    document.head.appendChild(style);
}

// Position overlay over an image
function positionOverlay(img: HTMLImageElement): void {
    if (!state.overlay) return;

    const rect = img.getBoundingClientRect();
    state.overlay.style.top = `${rect.top + window.scrollY}px`;
    state.overlay.style.left = `${rect.left + window.scrollX}px`;
    state.overlay.style.width = `${rect.width}px`;
    state.overlay.style.height = `${rect.height}px`;
    state.overlay.style.opacity = '1';
}

// Hide overlay
function hideOverlay(): void {
    if (state.overlay) {
        state.overlay.style.opacity = '0';
    }
    state.currentHoveredImg = null;
}

// Handle mouse over on images
function handleMouseOver(e: MouseEvent): void {
    if (!state.isCapturing) return;

    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
        const img = target as HTMLImageElement;
        state.currentHoveredImg = img;
        positionOverlay(img);
    }
}

// Handle mouse out on images
function handleMouseOut(e: MouseEvent): void {
    if (!state.isCapturing) return;

    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
        hideOverlay();
    }
}

// Handle click on images
async function handleClick(e: MouseEvent): Promise<void> {
    if (!state.isCapturing) return;

    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
        e.preventDefault();
        e.stopPropagation();

        const img = target as HTMLImageElement;
        const url = img.src;

        console.log('[ImageURLcpy] Image clicked, URL:', url);

        if (url && !state.capturedUrls.includes(url)) {
            state.capturedUrls.push(url);

            // Get format settings and apply them
            const settings = await getFormatSettings();
            const formattedUrls = formatUrls(state.capturedUrls, settings);

            // Copy formatted URLs to clipboard
            navigator.clipboard.writeText(formattedUrls).then(() => {
                showToast(`链接已拷贝：${url}`);
            }).catch(err => {
                console.error('Failed to copy:', err);
                showToast('复制失败，请重试');
            });
        } else if (state.capturedUrls.includes(url)) {
            showToast('该链接已经捕获过了');
        }
    }
}

// Start capture mode
function startCapture(): void {
    if (state.isCapturing) {
        console.log('[ImageURLcpy] Already capturing, ignoring start request');
        return;
    }

    console.log('[ImageURLcpy] Starting capture mode');
    state.isCapturing = true;
    state.capturedUrls = [];

    addAnimationStyles();

    // Create overlay if not exists
    if (!state.overlay) {
        state.overlay = createOverlay();
    }

    // Create stop button
    if (!state.stopButton) {
        state.stopButton = createStopButton();
    }

    // Add capturing class to body
    document.body.classList.add('imageurlcpy-capturing');

    // Add event listeners
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    document.addEventListener('click', handleClick, true);

    showToast('图片捕获模式已开启，点击图片复制URL');
}

// Stop capture mode
async function stopCapture(): Promise<void> {
    if (!state.isCapturing) return;

    state.isCapturing = false;

    // Remove event listeners
    document.removeEventListener('mouseover', handleMouseOver, true);
    document.removeEventListener('mouseout', handleMouseOut, true);
    document.removeEventListener('click', handleClick, true);

    // Remove capturing class
    document.body.classList.remove('imageurlcpy-capturing');

    // Hide and remove overlay
    if (state.overlay) {
        state.overlay.remove();
        state.overlay = null;
    }

    // Remove stop button
    if (state.stopButton) {
        state.stopButton.remove();
        state.stopButton = null;
    }

    // Save the captured URLs before clearing
    const urlCount = state.capturedUrls.length;
    const capturedUrlsCopy = [...state.capturedUrls];

    console.log('[ImageURLcpy] Stopping capture. URLs captured:', urlCount, capturedUrlsCopy);

    // Copy all URLs to clipboard with format settings
    if (urlCount > 0) {
        const settings = await getFormatSettings();
        const formattedUrls = formatUrls(capturedUrlsCopy, settings);

        navigator.clipboard.writeText(formattedUrls).then(() => {
            showToast(`已复制 ${urlCount} 个图片链接到剪贴板`);
        }).catch(err => {
            console.error('[ImageURLcpy] Failed to copy:', err);
            showToast('复制失败，请重试');
        });
    } else {
        showToast('捕获结束，未捕获任何图片');
    }

    // Clear state after copying
    state.capturedUrls = [];
    state.currentHoveredImg = null;
}

// Listen for messages from background script or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startCapture') {
        startCapture();
        sendResponse({ success: true });
    } else if (message.action === 'stopCapture') {
        stopCapture();
        sendResponse({ success: true });
    } else if (message.action === 'getStatus') {
        sendResponse({
            isCapturing: state.isCapturing,
            urlCount: state.capturedUrls.length
        });
    }
    return true;
});

// Handle scroll to reposition overlay
window.addEventListener('scroll', () => {
    if (state.isCapturing && state.currentHoveredImg) {
        positionOverlay(state.currentHoveredImg);
    }
}, { passive: true });

// Handle resize to reposition overlay
window.addEventListener('resize', () => {
    if (state.isCapturing && state.currentHoveredImg) {
        positionOverlay(state.currentHoveredImg);
    }
}, { passive: true });
