chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "openDNSRecords",
      title: "Öffne DNS Records für '%s'",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "openDNSRecords" && info.selectionText) {
      const url = `https://www.nslookup.io/domains/${encodeURIComponent(info.selectionText)}/dns-records/`;
      chrome.tabs.create({ url: url });
    }
  });
  