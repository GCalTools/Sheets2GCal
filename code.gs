function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Language')
        .addItem('English', 'setEnglish')
        .addItem('Japanese', 'setJapanese')
        .addToUi();
}

function setEnglish() {
    setLanguage(SpreadsheetApp.getActiveSpreadsheet().getId(), 'en');
}

function setJapanese() {
    setLanguage(SpreadsheetApp.getActiveSpreadsheet().getId(), 'ja');
}

function getTranslation(language, key) {
    const translations = {
        en: {
            "Delete": "Delete",
            "Update": "Update",
            "Title": "Title",
            "Start": "Start Date",
            "End": "End Date",
            "Start Time": "Start Time",
            "End Time": "End Time",
            "Repeat": "Frequency",
            "Interval": "Interval",
            "Count": "Occurrences",
            "Until": "Until",
            "By Day": "By Day",
            "Description": "Description",
            "Location": "Location",
            "Timezone": "Timezone",
            "Guests": "Guests",
            "Event ID": "Event ID",
            "Link": "Link",
            "Meet": "Meet",
            "Color": "Color"
        },
        ja: {
            "Delete": "削除",
            "Update": "更新",
            "Title": "タイトル",
            "Start": "日付",
            "End": "終了",
            "Start Time": "開始時刻",
            "End Time": "終了時刻",
            "Repeat": "頻度",
            "Interval": "間隔",
            "Count": "カウント",
            "Until": "まで",
            "By Day": "配車",
            "Description": "児童名",
            "Location": "場所",
            "Timezone": "タイムゾーン",
            "Guests": "ゲスト",
            "Event ID": "イベントID",
            "Link": "リンク",
            "Meet": "Meet",
            "Color": "カラー"
        }
    };

    return translations[language][key];
}

function setLanguage(sheetId, language) {
    const sheet = SpreadsheetApp.openById(sheetId);
    const headers = ["Delete", "Update", "Title", "Start Date", "End Date", "Start Time", "End Time", "Frequency", "Interval", "Occurrences", "Until", "By Day", "Description", "Location", "Timezone", "Guests", "Event ID", "Link", "Meet", "Color"];
    const translatedHeaders = headers.map(header => getTranslation(language, header));

    const range = sheet.getRange('A1:T1'); // Adjust the range according to your header location
    range.setValues([translatedHeaders]);
}
