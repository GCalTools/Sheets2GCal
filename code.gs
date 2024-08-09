function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Language')
        .addItem('English', 'setEnglish')
        .addItem('French', 'setFrench')
        .addItem('Arabic', 'setArabic')
        .addItem('Italian', 'setItalian')
        .addItem('Hebrew', 'setHebrew')
        .addItem('Japanese', 'setJapanese')
        .addToUi();
}

function setEnglish() {
    setLanguage(SpreadsheetApp.getActiveSpreadsheet().getId(), 'en');
}

function setFrench() {
    setLanguage(SpreadsheetApp.getActiveSpreadsheet().getId(), 'fr');
}

function setArabic() {
    setLanguage(SpreadsheetApp.getActiveSpreadsheet().getId(), 'ar');
}

function setItalian() {
    setLanguage(SpreadsheetApp.getActiveSpreadsheet().getId(), 'it');
}

function setHebrew() {
    setLanguage(SpreadsheetApp.getActiveSpreadsheet().getId(), 'iw');
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
            "Start": "Start",
            "End": "End",
            "Start Time": "Start Time",
            "End Time": "End Time",
            "Repeat": "Repeat",
            "Interval": "Interval",
            "Count": "Count",
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
        fr: {
            "Delete": "Supprimer",
            "Update": "Mettre à jour",
            "Title": "Titre",
            "Start": "Début",
            "End": "Fin",
            "Start Time": "Heure de début",
            "End Time": "Heure de fin",
            "Repeat": "Répéter",
            "Interval": "Intervalle",
            "Count": "Nombre",
            "Until": "Jusqu'à",
            "By Day": "ByDay",
            "Description": "Description",
            "Location": "Lieu",
            "Timezone": "Fuseau horaire",
            "Guests": "Invités",
            "Event ID": "ID",
            "Link": "Lien",
            "Meet": "Meet",
            "Color": "Couleur"
        },
        ar: {
            "Delete": "حذف",
            "Update": "تحديث",
            "Title": "العنوان",
            "Start": "تاريخ البداية",
            "End": "تاريخ النهاية",
            "Start Time": "من",
            "End Time": "إلى",
            "Repeat": "تكرار",
            "Interval": "المدة الزمنية",
            "Count": "العدد",
            "Until": "حتى",
            "By Day": "باليوم",
            "Description": "الوصف",
            "Location": "الموقع",
            "Timezone": "النطاق الزمني",
            "Guests": "المدعوين",
            "Event ID": "رقم الحدث/الموعد",
            "Link": "الرابط",
            "Meet": "اللقاء",
            "Color": "اللون"
        },
        it: {
            "Delete": "Elimina",
            "Update": "Aggiorna",
            "Title": "Titolo",
            "Start": "Inizio",
            "End": "Fine",
            "Start Time": "Ora di inizio",
            "End Time": "Ora di fine",
            "Repeat": "Ripetizione",
            "Interval": "Intervallo",
            "Count": "Conteggio",
            "Until": "Fino a",
            "By Day": "Per giorno",
            "Description": "Descrizione",
            "Location": "Luogo",
            "Timezone": "Fuso orario",
            "Guests": "Ospiti",
            "Event ID": "ID evento",
            "Link": "Link",
            "Meet": "Meet",
            "Color": "Colore"
        },
        iw: {
            "Delete": "מחק",
            "Update": "עדכן",
            "Title": "שם",
            "Start": "התחלה",
            "End": "סיום",
            "Start Time": "שעת התחלה",
            "End Time": "שעת סיום",
            "Repeat": "חזרה",
            "Interval": "הפסקה",
            "Count": "ספירה",
            "Until": "עד",
            "By Day": "לפי יום",
            "Description": "תיאור",
            "Location": "מיקום",
            "Timezone": "אזור זמן",
            "Guests": "מוזמנים",
            "Event ID": "זהות אירוע",
            "Link": "קישור",
            "Meet": "Meet",
            "Color": "צבע"
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
            "Interval": "配車",
            "Count": "児童名",
            "Until": "まで",
            "By Day": "曜日ごと",
            "Description": "説明",
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
    const headers = ["Delete", "Update", "Title", "Start", "End", "Start Time", "End Time", "Repeat", "Interval", "Count", "Until", "By Day", "Description", "Location", "Timezone", "Guests", "Event ID", "Link", "Meet", "Color"];
    const translatedHeaders = headers.map(header => getTranslation(language, header));

    const range = sheet.getRange('A1:T1'); // Adjust the range according to your header location
    range.setValues([translatedHeaders]);
}
