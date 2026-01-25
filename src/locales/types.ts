export interface LocaleType {
    appName: string;
    appDesc: string;
    // Popup
    popup: {
        title: string;
        desc: string;
        statusStandby: string;
        statusCapturing: string;
        statusSuccess: string;
        copiedCount: string;
        btnStart: string;
        btnStop: string;
        tip: string;
        btnSettings: string;
    },
    // Options
    options: {
        title: string;
        subtitle: string;
        singleUrl: {
            title: string;
            desc: string;
            prefixObj: string;
            suffixObj: string;
            prefixPlaceholder: string;
            suffixPlaceholder: string;
            preview: string;
        },
        multiUrl: {
            title: string;
            desc: string;
            first: {
                title: string;
                prefix: string;
                suffix: string;
            },
            middle: {
                title: string;
                prefix: string;
                suffix: string;
            },
            last: {
                title: string;
                prefix: string;
                suffix: string;
            },
            preview: string;
        },
        actions: {
            save: string;
            reset: string;
            savedMsg: string;
            resetMsg: string;
        },
        language: {
            label: string;
        }
    }
}
