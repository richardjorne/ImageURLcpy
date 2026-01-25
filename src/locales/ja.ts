import { LocaleType } from './types';

export const ja: LocaleType = {
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
