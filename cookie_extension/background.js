chrome.runtime.onInstalled.addListener(() => {
  // Default cookie preference: 'none'
  chrome.storage.sync.set({ cookiePref: 'none' });
});

// List of trusted sites
const trustedSites = ['example.com', 'trustedsource.org'];

// Check each visited website
chrome.webNavigation.onCompleted.addListener(function(details) {
  const url = new URL(details.url);
  const domain = url.hostname;

  if (!trustedSites.includes(domain)) {
      chrome.scripting.executeScript({
          target: { tabId: details.tabId },
          files: ['content.js']
      });
  }
});
