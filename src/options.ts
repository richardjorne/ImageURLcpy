// Options Page Script for ImageURLcpy Extension

interface FormatSettings {
    // Single URL
    singlePrefix: string;
    singleSuffix: string;
    // Multiple URLs
    firstPrefix: string;
    firstSuffix: string;
    middlePrefix: string;
    middleSuffix: string;
    lastPrefix: string;
    lastSuffix: string;
}

const DEFAULT_SETTINGS: FormatSettings = {
    singlePrefix: '',
    singleSuffix: '',
    firstPrefix: '',
    firstSuffix: '',
    middlePrefix: '',
    middleSuffix: '',
    lastPrefix: '',
    lastSuffix: ''
};

// DOM Elements
const elements = {
    singlePrefix: document.getElementById('singlePrefix') as HTMLInputElement,
    singleSuffix: document.getElementById('singleSuffix') as HTMLInputElement,
    firstPrefix: document.getElementById('firstPrefix') as HTMLInputElement,
    firstSuffix: document.getElementById('firstSuffix') as HTMLInputElement,
    middlePrefix: document.getElementById('middlePrefix') as HTMLInputElement,
    middleSuffix: document.getElementById('middleSuffix') as HTMLInputElement,
    lastPrefix: document.getElementById('lastPrefix') as HTMLInputElement,
    lastSuffix: document.getElementById('lastSuffix') as HTMLInputElement,
    singlePreview: document.getElementById('singlePreview') as HTMLElement,
    multiPreview: document.getElementById('multiPreview') as HTMLElement,
    saveBtn: document.getElementById('saveBtn') as HTMLButtonElement,
    resetBtn: document.getElementById('resetBtn') as HTMLButtonElement,
    status: document.getElementById('status') as HTMLDivElement
};

// Load settings from storage
function loadSettings(): void {
    chrome.storage.sync.get(DEFAULT_SETTINGS, (items) => {
        const settings = items as FormatSettings;
        elements.singlePrefix.value = settings.singlePrefix;
        elements.singleSuffix.value = settings.singleSuffix;
        elements.firstPrefix.value = settings.firstPrefix;
        elements.firstSuffix.value = settings.firstSuffix;
        elements.middlePrefix.value = settings.middlePrefix;
        elements.middleSuffix.value = settings.middleSuffix;
        elements.lastPrefix.value = settings.lastPrefix;
        elements.lastSuffix.value = settings.lastSuffix;
        updatePreviews();
    });
}

// Save settings to storage
function saveSettings(): void {
    const settings: FormatSettings = {
        singlePrefix: elements.singlePrefix.value,
        singleSuffix: elements.singleSuffix.value,
        firstPrefix: elements.firstPrefix.value,
        firstSuffix: elements.firstSuffix.value,
        middlePrefix: elements.middlePrefix.value,
        middleSuffix: elements.middleSuffix.value,
        lastPrefix: elements.lastPrefix.value,
        lastSuffix: elements.lastSuffix.value
    };

    chrome.storage.sync.set(settings, () => {
        showStatus('设置已保存', 'success');
    });
}

// Reset to default settings
function resetSettings(): void {
    chrome.storage.sync.set(DEFAULT_SETTINGS, () => {
        elements.singlePrefix.value = DEFAULT_SETTINGS.singlePrefix;
        elements.singleSuffix.value = DEFAULT_SETTINGS.singleSuffix;
        elements.firstPrefix.value = DEFAULT_SETTINGS.firstPrefix;
        elements.firstSuffix.value = DEFAULT_SETTINGS.firstSuffix;
        elements.middlePrefix.value = DEFAULT_SETTINGS.middlePrefix;
        elements.middleSuffix.value = DEFAULT_SETTINGS.middleSuffix;
        elements.lastPrefix.value = DEFAULT_SETTINGS.lastPrefix;
        elements.lastSuffix.value = DEFAULT_SETTINGS.lastSuffix;
        updatePreviews();
        showStatus('已重置为默认设置', 'success');
    });
}

// Update preview displays
function updatePreviews(): void {
    const singlePrefix = elements.singlePrefix.value || '';
    const singleSuffix = elements.singleSuffix.value || '';
    const firstPrefix = elements.firstPrefix.value || '';
    const firstSuffix = elements.firstSuffix.value || '';
    const middlePrefix = elements.middlePrefix.value || '';
    const middleSuffix = elements.middleSuffix.value || '';
    const lastPrefix = elements.lastPrefix.value || '';
    const lastSuffix = elements.lastSuffix.value || '';

    // Single URL preview
    elements.singlePreview.textContent = `${singlePrefix}https://example.com/image.jpg${singleSuffix}`;

    // Multiple URLs preview
    elements.multiPreview.textContent =
        `${firstPrefix}https://example.com/image1.jpg${firstSuffix}\n` +
        `${middlePrefix}https://example.com/image2.jpg${middleSuffix}\n` +
        `${lastPrefix}https://example.com/image3.jpg${lastSuffix}`;
}

// Show status message
function showStatus(message: string, type: 'success' | 'error'): void {
    elements.status.textContent = message;
    elements.status.className = `status ${type}`;
    elements.status.style.display = 'block';

    setTimeout(() => {
        elements.status.style.display = 'none';
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();

    // Event listeners
    elements.saveBtn.addEventListener('click', saveSettings);
    elements.resetBtn.addEventListener('click', resetSettings);

    // Update previews on input change
    const inputs = [
        elements.singlePrefix, elements.singleSuffix,
        elements.firstPrefix, elements.firstSuffix,
        elements.middlePrefix, elements.middleSuffix,
        elements.lastPrefix, elements.lastSuffix
    ];

    inputs.forEach(input => {
        input.addEventListener('input', updatePreviews);
    });
});
