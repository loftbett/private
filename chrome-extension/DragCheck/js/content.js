chrome.runtime.sendMessage({
    value: document.getElementsByTagName('body')[0].outerText
});
