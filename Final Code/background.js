const AZ_PROBLEM_KEY = "AZ_PROBLEM_KEY";

function updateBadge(bookmarks) {
    const count = bookmarks ? bookmarks.length : 0;
    chrome.action.setBadgeText({ text: count > 0 ? count.toString() : "" });
    chrome.action.setBadgeBackgroundColor({ color: "#10b981" }); // Emerald Green
}

// Initial check
chrome.storage.sync.get([AZ_PROBLEM_KEY], (data) => {
    updateBadge(data[AZ_PROBLEM_KEY]);
});

// Listen for changes
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes[AZ_PROBLEM_KEY]) {
        updateBadge(changes[AZ_PROBLEM_KEY].newValue);
    }
});
