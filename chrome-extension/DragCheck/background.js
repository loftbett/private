var textContents = '';

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        textContents = request.value;
    }
);
