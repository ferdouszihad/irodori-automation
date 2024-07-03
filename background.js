// Handle messages from content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "runScript") {
    chrome.tabs.executeScript(sender.tab.id, { code: message.script });
  }
});
