/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/locales/zh_CN.ts
const zh_CN = {
    appName: "ImageURLcpy",
    appDesc: "快速捕获并复制网页中的图片URL",
    popup: {
        title: "ImageURLcpy",
        desc: "点击下方按钮开始捕获图片URL",
        statusStandby: "待机中",
        statusCapturing: "正在捕获...",
        statusSuccess: "已复制！",
        copiedCount: "已捕获: {count} 个链接",
        btnStart: "开始捕获",
        btnStop: "停止捕获",
        tip: "悬停图片显示高亮，点击复制URL",
        btnSettings: "设置"
    },
    options: {
        title: "ImageURLcpy 设置",
        subtitle: "配置复制URL时的前缀和后缀",
        singleUrl: {
            title: "单个URL格式",
            desc: "当只捕获一个图片时使用此格式",
            prefixObj: "前缀",
            suffixObj: "后缀",
            prefixPlaceholder: "例如: <img src=&quot;",
            suffixPlaceholder: '例如: &quot;>',
            preview: "预览"
        },
        multiUrl: {
            title: "多个URL格式",
            desc: "当捕获多个图片时，分别设置首个、中间、最后一个URL的格式",
            first: {
                title: "首个URL",
                prefix: "前缀",
                suffix: "后缀"
            },
            middle: {
                title: "中间URL",
                prefix: "前缀",
                suffix: "后缀"
            },
            last: {
                title: "最后一个URL",
                prefix: "前缀",
                suffix: "后缀"
            },
            preview: "预览（3个URL示例）"
        },
        actions: {
            save: "保存设置",
            reset: "重置为默认",
            savedMsg: "设置已保存",
            resetMsg: "已恢复默认设置"
        },
        language: {
            label: "语言 / Language"
        }
    },
    content: {
        toast: {
            linkCopied: "链接已拷贝：{url}",
            copyFailed: "复制失败，请重试",
            alreadyCaptured: "该链接已经捕获过了",
            startStats: "图片捕获模式已开启，点击图片复制URL",
            stopStats: "已复制 {count} 个图片链接到剪贴板",
            noImageCaptured: "捕获结束，未捕获任何图片"
        },
        button: {
            stop: "停止捕获"
        }
    },
    contextMenu: {
        startCapture: "开始捕获图片URL"
    }
};

;// ./src/locales/en.ts
const en = {
    appName: "ImageURLcpy",
    appDesc: "Quickly capture and copy image URLs from web pages",
    popup: {
        title: "ImageURLcpy",
        desc: "Click the button below to start capturing image URLs",
        statusStandby: "Standby",
        statusCapturing: "Capturing...",
        statusSuccess: "Copied!",
        copiedCount: "Captured: {count} link(s)",
        btnStart: "Start Capturing",
        btnStop: "Stop Capturing",
        tip: "Hover to highlight, click to copy URL",
        btnSettings: "Settings"
    },
    options: {
        title: "ImageURLcpy Settings",
        subtitle: "Configure prefixes and suffixes for copied URLs",
        singleUrl: {
            title: "Single URL Format",
            desc: "Format used when capturing a single image",
            prefixObj: "Prefix",
            suffixObj: "Suffix",
            prefixPlaceholder: 'e.g. <img src="',
            suffixPlaceholder: 'e.g. ">"',
            preview: "Preview"
        },
        multiUrl: {
            title: "Multiple URL Format",
            desc: "Set formats for the first, middle, and last URLs when capturing multiple images",
            first: {
                title: "First URL",
                prefix: "Prefix",
                suffix: "Suffix"
            },
            middle: {
                title: "Middle URL",
                prefix: "Prefix",
                suffix: "Suffix"
            },
            last: {
                title: "Last URL",
                prefix: "Prefix",
                suffix: "Suffix"
            },
            preview: "Preview (3 URLs example)"
        },
        actions: {
            save: "Save Settings",
            reset: "Reset to Default",
            savedMsg: "Settings saved",
            resetMsg: "Reset to default settings"
        },
        language: {
            label: "Language"
        }
    },
    content: {
        toast: {
            linkCopied: "Link copied: {url}",
            copyFailed: "Copy failed, please try again",
            alreadyCaptured: "This link has already been captured",
            startStats: "Capture mode started. Click images to copy URL",
            stopStats: "Copied {count} image URLs to clipboard",
            noImageCaptured: "Capture ended. No images captured"
        },
        button: {
            stop: "Stop Capture"
        }
    },
    contextMenu: {
        startCapture: "Start Capture Image URL"
    }
};

;// ./src/locales/ja.ts
const ja = {
    appName: "ImageURLcpy",
    appDesc: "Webページの画像URLを素早くキャプチャしてコピーします",
    popup: {
        title: "ImageURLcpy",
        desc: "下のボタンをクリックして画像のキャプチャを開始します",
        statusStandby: "待機中",
        statusCapturing: "キャプチャ中...",
        statusSuccess: "コピーしました！",
        copiedCount: "取得数: {count} 件",
        btnStart: "キャプチャ開始",
        btnStop: "キャプチャ停止",
        tip: "ホバーで強調表示、クリックでURLをコピー",
        btnSettings: "設定"
    },
    options: {
        title: "ImageURLcpy 設定",
        subtitle: "コピーするURLの接頭辞と接尾辞を設定します",
        singleUrl: {
            title: "単一URLの形式",
            desc: "画像を1つだけキャプチャする場合に使用されます",
            prefixObj: "接頭辞 (Prefix)",
            suffixObj: "接尾辞 (Suffix)",
            prefixPlaceholder: '例: <img src="',
            suffixPlaceholder: '例: ">"',
            preview: "プレビュー"
        },
        multiUrl: {
            title: "複数URLの形式",
            desc: "複数の画像をキャプチャする場合の最初、中間、最後のURL形式を設定します",
            first: {
                title: "最初のURL",
                prefix: "接頭辞",
                suffix: "接尾辞"
            },
            middle: {
                title: "中間のURL",
                prefix: "接頭辞",
                suffix: "接尾辞"
            },
            last: {
                title: "最後のURL",
                prefix: "接頭辞",
                suffix: "接尾辞"
            },
            preview: "プレビュー（3件の例）"
        },
        actions: {
            save: "設定を保存",
            reset: "初期設定に戻す",
            savedMsg: "設定を保存しました",
            resetMsg: "初期設定に戻しました"
        },
        language: {
            label: "言語 / Language"
        }
    },
    content: {
        toast: {
            linkCopied: "リンクをコピーしました: {url}",
            copyFailed: "コピーに失敗しました。もう一度お試しください",
            alreadyCaptured: "このリンクはすでに取得済みです",
            startStats: "キャプチャモードを開始しました。画像をクリックしてURLをコピー",
            stopStats: "{count} 個の画像URLをクリップボードにコピーしました",
            noImageCaptured: "キャプチャを終了しました。画像は取得されませんでした"
        },
        button: {
            stop: "キャプチャ停止"
        }
    },
    contextMenu: {
        startCapture: "画像URLのキャプチャを開始"
    }
};

;// ./src/locales/fr.ts
const fr = {
    appName: "ImageURLcpy",
    appDesc: "Capturez et copiez rapidement les URL d'images des pages Web",
    popup: {
        title: "ImageURLcpy",
        desc: "Cliquez ci-dessous pour commencer à capturer les URL",
        statusStandby: "En attente",
        statusCapturing: "Capture en cours...",
        statusSuccess: "Copié !",
        copiedCount: "Capturé : {count} lien(s)",
        btnStart: "Commencer",
        btnStop: "Arrêter",
        tip: "Survolez pour mettre en surbrillance, cliquez pour copier",
        btnSettings: "Paramètres"
    },
    options: {
        title: "Paramètres ImageURLcpy",
        subtitle: "Configurer les préfixes et suffixes pour les URL copiées",
        singleUrl: {
            title: "Format URL unique",
            desc: "Format utilisé lors de la capture d'une seule image",
            prefixObj: "Préfixe",
            suffixObj: "Suffixe",
            prefixPlaceholder: 'ex: <img src="',
            suffixPlaceholder: 'ex: ">"',
            preview: "Aperçu"
        },
        multiUrl: {
            title: "Format URL multiple",
            desc: "Définir les formats pour la première, les intermédiaires et la dernière URL",
            first: {
                title: "Première URL",
                prefix: "Préfixe",
                suffix: "Suffixe"
            },
            middle: {
                title: "URL intermédiaire",
                prefix: "Préfixe",
                suffix: "Suffixe"
            },
            last: {
                title: "Dernière URL",
                prefix: "Préfixe",
                suffix: "Suffixe"
            },
            preview: "Aperçu (exemple de 3 URL)"
        },
        actions: {
            save: "Enregistrer",
            reset: "Rétablir par défaut",
            savedMsg: "Paramètres enregistrés",
            resetMsg: "Paramètres rétablis par défaut"
        },
        language: {
            label: "Langue / Language"
        }
    },
    content: {
        toast: {
            linkCopied: "Lien copié : {url}",
            copyFailed: "Échec de la copie, veuillez réessayer",
            alreadyCaptured: "Ce lien a déjà été capturé",
            startStats: "Mode capture activé. Cliquez sur les images pour copier l'URL",
            stopStats: "{count} URL d'images copiées dans le presse-papiers",
            noImageCaptured: "Capture terminée. Aucune image capturée"
        },
        button: {
            stop: "Arrêter la capture"
        }
    },
    contextMenu: {
        startCapture: "Démarrer la capture d'URL d'image"
    }
};

;// ./src/locales/es.ts
const es = {
    appName: "ImageURLcpy",
    appDesc: "Captura y copia rápidamente URLs de imágenes de páginas web",
    popup: {
        title: "ImageURLcpy",
        desc: "Haga clic abajo para comenzar a capturar URLs",
        statusStandby: "En espera",
        statusCapturing: "Capturando...",
        statusSuccess: "¡Copiado!",
        copiedCount: "Capturado: {count} enlace(s)",
        btnStart: "Comenzar",
        btnStop: "Detener",
        tip: "Pase el cursor para resaltar, haga clic para copiar",
        btnSettings: "Configuración"
    },
    options: {
        title: "Configuración de ImageURLcpy",
        subtitle: "Configurar prefijos y sufijos para las URLs copiadas",
        singleUrl: {
            title: "Formato de URL única",
            desc: "Formato utilizado al capturar una sola imagen",
            prefixObj: "Prefijo",
            suffixObj: "Sufijo",
            prefixPlaceholder: 'ej: <img src="',
            suffixPlaceholder: 'ej: ">"',
            preview: "Vista previa"
        },
        multiUrl: {
            title: "Formato de múltiples URLs",
            desc: "Establecer formatos para la primera, intermedias y última URL",
            first: {
                title: "Primera URL",
                prefix: "Prefijo",
                suffix: "Sufijo"
            },
            middle: {
                title: "URL intermedia",
                prefix: "Prefijo",
                suffix: "Sufijo"
            },
            last: {
                title: "Última URL",
                prefix: "Prefijo",
                suffix: "Sufijo"
            },
            preview: "Vista previa (ejemplo de 3 URLs)"
        },
        actions: {
            save: "Guardar",
            reset: "Restablecer",
            savedMsg: "Configuración guardada",
            resetMsg: "Configuración restablecida"
        },
        language: {
            label: "Idioma / Language"
        }
    },
    content: {
        toast: {
            linkCopied: "Enlace copiado: {url}",
            copyFailed: "Error al copiar, inténtelo de nuevo",
            alreadyCaptured: "Este enlace ya ha sido capturado",
            startStats: "Modo de captura iniciado. Haga clic en las imágenes para copiar la URL",
            stopStats: "Copiadas {count} URL de imágenes al portapapeles",
            noImageCaptured: "Captura finalizada. No se capturaron imágenes"
        },
        button: {
            stop: "Detener captura"
        }
    },
    contextMenu: {
        startCapture: "Iniciar captura de URL de imagen"
    }
};

;// ./src/utils/i18n.ts





const LANGUAGES = [
    { code: 'zh_CN', name: '简体中文' },
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' }
];
const locales = {
    zh_CN: zh_CN,
    en: en,
    ja: ja,
    fr: fr,
    es: es
};
class I18n {
    constructor() {
        this.currentLang = 'zh_CN';
        this.listeners = [];
    }
    static getInstance() {
        if (!I18n.instance) {
            I18n.instance = new I18n();
        }
        return I18n.instance;
    }
    async init() {
        // Try to get from storage first
        const stored = await chrome.storage.sync.get(['language']);
        if (stored.language && locales[stored.language]) {
            this.currentLang = stored.language;
        }
        else {
            // Fallback to browser language matching
            const browserLang = navigator.language.replace('-', '_');
            if (browserLang.startsWith('zh')) {
                this.currentLang = 'zh_CN';
            }
            else if (browserLang.startsWith('ja')) {
                this.currentLang = 'ja';
            }
            else if (browserLang.startsWith('fr')) {
                this.currentLang = 'fr';
            }
            else if (browserLang.startsWith('es')) {
                this.currentLang = 'es';
            }
            else {
                this.currentLang = 'en'; // Default fallback
            }
        }
        console.log('I18n initialized with language:', this.currentLang);
    }
    getLanguage() {
        return this.currentLang;
    }
    async setLanguage(lang) {
        if (!locales[lang])
            return;
        this.currentLang = lang;
        await chrome.storage.sync.set({ language: lang });
        this.notifyListeners();
    }
    getMessage(keyPath, params) {
        const keys = keyPath.split('.');
        let current = locales[this.currentLang];
        for (const key of keys) {
            if (current && current[key] !== undefined) {
                current = current[key];
            }
            else {
                console.warn(`Missing translation for key: ${keyPath} in ${this.currentLang}`);
                return keyPath;
            }
        }
        if (typeof current === 'string') {
            let result = current;
            if (params) {
                Object.entries(params).forEach(([k, v]) => {
                    result = result.replace(`{${k}}`, String(v));
                });
            }
            return result;
        }
        return keyPath;
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    notifyListeners() {
        this.listeners.forEach(l => l());
    }
    /**
     * Renders all elements with data-i18n attribute in the given root element (or document body)
     */
    render(root = document) {
        const elements = root.querySelectorAll('[data-i18n], [data-i18n-placeholder], [data-i18n-title]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                const text = this.getMessage(key);
                // Preserve placeholder text if it's an input
                if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                    if (el.hasAttribute('placeholder')) {
                        // If we want to translate placeholders, we might need data-i18n-placeholder
                        const placeholderKey = el.getAttribute('data-i18n-placeholder');
                        if (placeholderKey) {
                            el.placeholder = this.getMessage(placeholderKey);
                        }
                    }
                }
                else {
                    el.textContent = text;
                }
            }
            // Handle specific attribute translations if needed (e.g. data-i18n-title)
            const titleKey = el.getAttribute('data-i18n-title');
            if (titleKey) {
                el.setAttribute('title', this.getMessage(titleKey));
            }
            const placeholderKey = el.getAttribute('data-i18n-placeholder');
            if (placeholderKey && (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) {
                el.placeholder = this.getMessage(placeholderKey);
            }
        });
    }
}

;// ./src/content.ts

const CONTENT_DEFAULT_SETTINGS = {
    singlePrefix: '',
    singleSuffix: '',
    firstPrefix: '',
    firstSuffix: '',
    middlePrefix: '',
    middleSuffix: '',
    lastPrefix: '',
    lastSuffix: ''
};
const state = {
    isCapturing: false,
    capturedUrls: [],
    overlay: null,
    stopButton: null,
    currentHoveredImg: null
};
// Initialize i18n
const i18n = I18n.getInstance();
i18n.init().catch(console.error);
// Listen for language changes and update config
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.language) {
        i18n.init().then(() => {
            // If capturing, update UI immediately
            if (state.isCapturing && state.stopButton) {
                state.stopButton.textContent = i18n.getMessage('content.button.stop');
            }
        }).catch(console.error);
    }
});
// Format URLs with prefix/suffix settings
function formatUrls(urls, settings) {
    if (urls.length === 0)
        return '';
    if (urls.length === 1) {
        return `${settings.singlePrefix}${urls[0]}${settings.singleSuffix}`;
    }
    // Multiple URLs
    const formattedUrls = [];
    urls.forEach((url, index) => {
        if (index === 0) {
            // First URL
            formattedUrls.push(`${settings.firstPrefix}${url}${settings.firstSuffix}`);
        }
        else if (index === urls.length - 1) {
            // Last URL
            formattedUrls.push(`${settings.lastPrefix}${url}${settings.lastSuffix}`);
        }
        else {
            // Middle URLs
            formattedUrls.push(`${settings.middlePrefix}${url}${settings.middleSuffix}`);
        }
    });
    return formattedUrls.join('\n');
}
// Get format settings from storage
async function getFormatSettings() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(CONTENT_DEFAULT_SETTINGS, (items) => {
            resolve(items);
        });
    });
}
// Create the green overlay element
function createOverlay() {
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
function createStopButton() {
    const button = document.createElement('button');
    button.id = 'imageurlcpy-stop-button';
    button.textContent = i18n.getMessage('content.button.stop');
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
function showToast(message) {
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
function addAnimationStyles() {
    if (document.getElementById('imageurlcpy-styles'))
        return;
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
function positionOverlay(img) {
    if (!state.overlay)
        return;
    const rect = img.getBoundingClientRect();
    state.overlay.style.top = `${rect.top + window.scrollY}px`;
    state.overlay.style.left = `${rect.left + window.scrollX}px`;
    state.overlay.style.width = `${rect.width}px`;
    state.overlay.style.height = `${rect.height}px`;
    state.overlay.style.opacity = '1';
}
// Hide overlay
function hideOverlay() {
    if (state.overlay) {
        state.overlay.style.opacity = '0';
    }
    state.currentHoveredImg = null;
}
// Handle mouse over on images
function handleMouseOver(e) {
    if (!state.isCapturing)
        return;
    const target = e.target;
    if (target.tagName === 'IMG') {
        const img = target;
        state.currentHoveredImg = img;
        positionOverlay(img);
    }
}
// Handle mouse out on images
function handleMouseOut(e) {
    if (!state.isCapturing)
        return;
    const target = e.target;
    if (target.tagName === 'IMG') {
        hideOverlay();
    }
}
// Handle click on images
async function handleClick(e) {
    if (!state.isCapturing)
        return;
    const target = e.target;
    if (target.tagName === 'IMG') {
        e.preventDefault();
        e.stopPropagation();
        const img = target;
        const url = img.src;
        console.log('[ImageURLcpy] Image clicked, URL:', url);
        if (url && !state.capturedUrls.includes(url)) {
            state.capturedUrls.push(url);
            // Get format settings and apply them
            const settings = await getFormatSettings();
            const formattedUrls = formatUrls(state.capturedUrls, settings);
            // Copy formatted URLs to clipboard
            navigator.clipboard.writeText(formattedUrls).then(() => {
                showToast(i18n.getMessage('content.toast.linkCopied', { url: url }));
            }).catch(err => {
                console.error('Failed to copy:', err);
                showToast(i18n.getMessage('content.toast.copyFailed'));
            });
        }
        else if (state.capturedUrls.includes(url)) {
            showToast(i18n.getMessage('content.toast.alreadyCaptured'));
        }
    }
}
// Start capture mode
function startCapture() {
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
    showToast(i18n.getMessage('content.toast.startStats'));
}
// Stop capture mode
async function stopCapture() {
    if (!state.isCapturing)
        return;
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
            showToast(i18n.getMessage('content.toast.stopStats', { count: urlCount }));
        }).catch(err => {
            console.error('[ImageURLcpy] Failed to copy:', err);
            showToast(i18n.getMessage('content.toast.copyFailed'));
        });
    }
    else {
        showToast(i18n.getMessage('content.toast.noImageCaptured'));
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
    }
    else if (message.action === 'stopCapture') {
        stopCapture();
        sendResponse({ success: true });
    }
    else if (message.action === 'getStatus') {
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

/******/ })()
;
//# sourceMappingURL=content.js.map