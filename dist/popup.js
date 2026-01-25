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

;// ./src/popup.ts

document.addEventListener('DOMContentLoaded', async () => {
    const i18n = I18n.getInstance();
    await i18n.init();
    i18n.render();
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const statusEl = document.getElementById('status');
    const statusText = statusEl.querySelector('.status-text');
    const urlCountEl = document.getElementById('urlCount');
    // Note: In HTML we replaced the inner span with a single span with ID urlCountText
    // But let's check if we want to grab that specific element to update it.
    // In my previous step, I added `id="urlCountText"`.
    const urlCountTextEl = document.getElementById('urlCountText');
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
            statusText.textContent = i18n.getMessage('popup.statusCapturing');
            urlCountEl.style.display = 'block';
            // Update dynamic count
            if (urlCountTextEl) {
                urlCountTextEl.textContent = i18n.getMessage('popup.copiedCount', { count: urlCount });
            }
        }
        else {
            startBtn.style.display = 'flex';
            stopBtn.style.display = 'none';
            statusEl.classList.remove('active');
            statusText.textContent = i18n.getMessage('popup.statusStandby');
            urlCountEl.style.display = 'none';
        }
    }
    // Get current capture status
    function getCaptureStatus() {
        chrome.runtime.sendMessage({ action: 'getCaptureStatus' }, (response) => {
            // Check for runtime error (e.g. background invalid)
            if (chrome.runtime.lastError)
                return;
            if (response) {
                updateUI(response.isCapturing, response.urlCount);
            }
        });
    }
    // Start capture
    startBtn.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'startCaptureFromPopup' }, (response) => {
            // Check for runtime error
            if (chrome.runtime.lastError)
                return;
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
            if (chrome.runtime.lastError)
                return;
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