import { LocaleType } from '../locales/types';
import { zh_CN } from '../locales/zh_CN';
import { en } from '../locales/en';
import { ja } from '../locales/ja';
import { fr } from '../locales/fr';
import { es } from '../locales/es';

export type LanguageCode = 'zh_CN' | 'en' | 'ja' | 'fr' | 'es';

export const LANGUAGES: { code: LanguageCode; name: string }[] = [
    { code: 'zh_CN', name: '简体中文' },
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' }
];

const locales: Record<LanguageCode, LocaleType> = {
    zh_CN,
    en,
    ja,
    fr,
    es
};

export class I18n {
    private static instance: I18n;
    private currentLang: LanguageCode = 'zh_CN';
    private listeners: (() => void)[] = [];

    private constructor() { }

    public static getInstance(): I18n {
        if (!I18n.instance) {
            I18n.instance = new I18n();
        }
        return I18n.instance;
    }

    public async init(): Promise<void> {
        // Try to get from storage first
        const stored = await chrome.storage.sync.get(['language']);
        if (stored.language && locales[stored.language as LanguageCode]) {
            this.currentLang = stored.language as LanguageCode;
        } else {
            // Fallback to browser language matching
            const browserLang = navigator.language.replace('-', '_');
            if (browserLang.startsWith('zh')) {
                this.currentLang = 'zh_CN';
            } else if (browserLang.startsWith('ja')) {
                this.currentLang = 'ja';
            } else if (browserLang.startsWith('fr')) {
                this.currentLang = 'fr';
            } else if (browserLang.startsWith('es')) {
                this.currentLang = 'es';
            } else {
                this.currentLang = 'en'; // Default fallback
            }
        }
        console.log('I18n initialized with language:', this.currentLang);
    }

    public getLanguage(): LanguageCode {
        return this.currentLang;
    }

    public async setLanguage(lang: LanguageCode): Promise<void> {
        if (!locales[lang]) return;
        this.currentLang = lang;
        await chrome.storage.sync.set({ language: lang });
        this.notifyListeners();
    }

    public getMessage(keyPath: string, params?: Record<string, string | number>): string {
        const keys = keyPath.split('.');
        let current: any = locales[this.currentLang];

        for (const key of keys) {
            if (current && current[key] !== undefined) {
                current = current[key];
            } else {
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

    public subscribe(listener: () => void) {
        this.listeners.push(listener);
    }

    private notifyListeners() {
        this.listeners.forEach(l => l());
    }

    /**
     * Renders all elements with data-i18n attribute in the given root element (or document body)
     */
    public render(root: HTMLElement | Document = document) {
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
                } else {
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
