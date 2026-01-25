import { LocaleType } from './types';

export const zh_CN: LocaleType = {
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
