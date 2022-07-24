/** インストール/更新時のみでの実行 */
chrome.runtime.onInstalled.addListener(function (details) {
    console.log("test");
    /* コンテキストメニュー（右クリックメニュー）の追加*/
    const parent = chrome.contextMenus.create({
        id : "share",
        title : "ページを共有",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        parentId: parent,
        id: "title",
        title: "ページタイトルをコピー",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        parentId: parent,
        id: "URL",
        title: "ページURLをコピー",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        parentId: parent,
        id: "both",
        title: "タイトルとURLをコピー",
        contexts: ["all"]
    });
});

/** コンテキストメニューがクリックされた際の処理 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch(info.menuItemId) {
        case "title" :
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                function: title,
            });
            break;

        case "URL":
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                function: URL,
            });
            break;

        case "both":
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                function: both,
            });
            break;
    }
});

function title(){
    const element = document.createElement("textarea");
    element.value = "title"+document.title;
    document.body.append(element);
    element.select();
    document.execCommand("copy");
    element.remove();
}
function URL(){
    const element = document.createElement("textarea");
    element.value = location.href;
    document.body.append(element);
    element.select();
    document.execCommand("copy");
    element.remove();
}

function both(){
    const element = document.createElement("textarea");
    element.value = document.title + "\n" + location.href;
    document.body.append(element);
    element.select();
    document.execCommand("copy");
    element.remove();
}
