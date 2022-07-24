const title = document.getElementById("pageTitle");
const url = document.getElementById("pageURL");

chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
    const tabTitle = tabs[0].title;
    const tabURL = tabs[0].url;

    title.value = tabTitle;
    url.value = tabURL;

    document.getElementById("copyTitle").addEventListener("click", () => {
        navigator.clipboard.writeText(tabTitle);
        showCheck("copyTitle");
    }, false);
    document.getElementById("copyURL").addEventListener("click", () => {
        navigator.clipboard.writeText(tabURL);
        showCheck("copyURL");
    }, false);
    document.getElementById("copyBoth").addEventListener("click", () => {
        navigator.clipboard.writeText(tabTitle + "\n" + tabURL);
        showCheck("copyBoth");
    }, false);

    /*Facebook*/
    document.getElementById("shareToFB").addEventListener("click", () => {
        windowOpen("https://www.facebook.com/share.php?u=" + encodeURIComponent(tabURL));
    }, false);

    /*Twitter*/
    document.getElementById("tweet").addEventListener("click", () => {
        windowOpen("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tabTitle) + "%0a&url=" + encodeURIComponent(tabURL));
    }, false);

    /*LINE*/
    document.getElementById("LINE").addEventListener("click", () => {
        windowOpen("https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(tabURL));
    }, false);

    if(!/http\:\/\/|https\:\/\//.test(tabURL)){
        const element= document.getElementById("sns");
        element.style.margintop = "1.5em";
        element.textContent = "このページでは SNSを用いたシェア機能を利用できません。";
    }
})

let timeout;
function showCheck(parentId) {
    clearTimeout(timeout); // 5秒後に予定されている処理をキャンセル
    const checkIcons = document.getElementsByClassName("checkIcon");
    for (let i = 0; i < checkIcons.length; i++) {
        checkIcons[i].style.display = "none";
    }
    const clipIcons = document.getElementsByClassName("bi-clipboard");
    for (let i = 0; i < clipIcons.length; i++) {
        clipIcons[i].style.display = "";
    }

    const child = document.getElementById(parentId).children;
    child[0].style.display = "none";
    child[1].style.display = "";

    timeout = setTimeout(() => {
        /* 5秒後の処理 */
        child[0].style.display = "";
        child[1].style.display = "none";
    }, 5000);
}

function windowOpen(url) {
    window.open(url, 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1')
    this.close();
    return false;
}