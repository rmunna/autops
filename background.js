chrome.action.onClicked.addListener((tab) => {
  console.log(`Extension clicked on tab: ${tab.id}`);
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("Auto Trading Plugin installed.");
});
