import { LocaleType } from './types';

export const en: LocaleType = {
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
