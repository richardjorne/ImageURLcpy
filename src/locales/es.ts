import { LocaleType } from './types';

export const es: LocaleType = {
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
