import { LocaleType } from './types';

export const fr: LocaleType = {
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
