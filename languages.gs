var languages = ['ja'];

var colorsNames = {
    ja: ['デフォルト', 'ラベンダー', 'セージ', 'グレープ', 'フラミンゴ', 'バナナ', 'タンジェリン', 'ピーコック', 'グラファイト', 'ブルーベリー', 'バジル', 'トマト']
};

var oriColorsHtml = ['', '#7986cb', '#33b679', '#8e24aa', '#e67c73', '#f6c026', '#f5511d', '#039be5', '#616161', '#3f51b5', '#0b8043', '#d60000'];
var colorsHtml = ['', '#b6c9ff', '#4dffb6', '#d536ff', '#ffbaad', '#ffff39', '#ff7a2c', '#05e9ff', '#929292', '#5f7aff', '#11c065', '#ff0000'];

var headerNames = {
    ja: ["削除", "更新", "タイトル", "日付", "終了", "開始時刻", "終了時刻", "頻度", "間隔", "カウント", "まで", "配車", "児童名", "場所", "タイムゾーン", "ゲスト", "イベントID", "リンク", "Meet", "カラー"]
};

var repeatNames = {
    ja: ['', '毎日', '毎週', '毎月', '毎年']
};

var colColName = {
    ja: 'カラー'
};

var htmlStrings = {
    ja: {
        "language": "ja",
        "align": "left",
        "direction": "ltr",
        "account": "アカウント",
        "calendar": "カレンダー",
        "guestnotifications": "ゲスト通知（オプション）",
        "updatewarning": "'シート対カレンダーのチェック'を使用して更新するイベントを選択する場合、シートとカレンダーの違い、Googleカレンダーイベントに対して行われた編集を検出します。カレンダーの編集を上書きしないように注意し、必要に応じて最初に'更新のインポート'を行ってください。",
        "sendemail": "新しく作成されたイベントにメールを送信",
        "sendemailupdated": "更新/削除されたイベントにメールを送信",
        "options": "オプション",
        "keeprow": "削除されたイベントの行データを保持",
        "fetching": "データを取得中...",
        "subscribe": "購読",
        "update": "更新",
        "notsheets2gcal": "これはSheets2Gcal Proシートではありません\nカレンダーをインポートするか、シートをリンクしてください",
        "error": "エラー",
        "verify": "いくつかのイベントに対して'削除'または'更新'を選択し、データが有効であることを確認してください",
        "createdsingle": "イベントが作成されました",
        "updatedsingle": "イベントが更新されました",
        "deletedsingle": "イベントが削除されました",
        "importedsingle": "イベントがインポートされました",
        "created": "イベントが作成されました",
        "updated": "イベントが更新されました",
        "deleted": "イベントが削除されました",
        "imported": "イベントがインポートされました",
        "import": "このシートにインポートするカレンダーを選択",
        "allevents": "すべてのイベント",
        "startdate": "開始日",
        "enddate": "終了日",
        "importcalendar": "シートをクリアしてカレンダーをインポート",
        "importupdates": "更新と新しいイベントをインポート",
        "upgrade": "シートをクリアせずにGoogleカレンダーから更新と新しいイベントをインポートするには、有料サブスクリプションにアップグレードしてください。",
        "nocalendars": "カレンダーが見つかりません",
        "importrange": "日付範囲の更新をインポートすることはできません",
        "selectcalendar": "リンクするカレンダーを選択",
        "clearlink": "シートをクリアしてリンク",
        "clearlinktext": "カレンダーをインポートせずに新しいイベントのために空のシートを設定する最良の方法です。既存のイベントを編集または追加するには、'カレンダーをシートにインポート'を使用してください。",
        "keepdata": "データを保持してシートをリンク",
        "linksheet": "シートをリンク",
        "linksheettext": "Googleカレンダー設定からIDを入力してください。IDでリンクしてもシートは変更されず、このシートにリンクされたGoogleカレンダーのみが変更されます",
        "resetlangtext": "このシートをデフォルトのGoogle言語に設定",
        "resetlang": "シートの言語を更新",
        "linked": "リンクされました！",
        "wrongaccount": "からログアウトしてください",
        "accesswith": "としてドキュメントにアクセスするには",
        "triggertext": "24時間制: 0は真夜中、12は正午",
        "deletetext": "すべてのインポート/エクスポートを停止",
        "startbutton": "開始",
        "stopbutton": "停止",
        "fulltriggertext": "シートとGoogleカレンダーの変更の毎日のインポート/エクスポートを設定します。エクスポート->インポートを行う場合、Googleカレンダーの変更を上書きしないように注意してください。選択されたシートは同時にインポート/エクスポートを実行しますが、正確にはその時間ではありません。",
        "notrigger": "現在、このシートを同期していません",
        "yestrigger": "現在、このシートを自動的に同期しています",
        "autoimport": "自動インポート/エクスポート",
        "resetstatus": "ステータスカラーをリセット",
        "autoimportexport": "自動インポート/エクスポート",
        "importtext": "インポート",
        "exporttext": "エクスポート",
        "selectsyncmethod": "同期順序"
    }
};
