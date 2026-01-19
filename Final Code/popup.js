const AZ_PROBLEM_KEY = "AZ_PROBLEM_KEY";

const assetsURLMap = {
    "play": chrome.runtime.getURL("assets/play.png"),
    "delete": chrome.runtime.getURL("assets/delete.png")

}

const bookmarkSection = document.getElementById("bookmarks");

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get([AZ_PROBLEM_KEY], (data) => {
        const currentBookmarks = data[AZ_PROBLEM_KEY] || [];
        viewBookmarks(currentBookmarks);
    });

    const clearAllBtn = document.getElementById("clear-all");
    if (clearAllBtn) {
        clearAllBtn.addEventListener("click", onClearAll);
    }
});

function viewBookmarks(bookmarks) {
    bookmarkSection.innerHTML = "";

    if (bookmarks.length === 0) {
        bookmarkSection.innerHTML = `
            <div class="empty-state">
                <p>No bookmarks yet ✨</p>
                <p style="font-size: 12px; color: #94a3b8;">Go to a problem page to add one!</p>
            </div>
        `;
        return;
    }

    bookmarks.forEach(bookmark => addNewBookmark(bookmark));

}

function addNewBookmark(bookmark) {
    const newBookmark = document.createElement('div');
    const bookmarkTitle = document.createElement('div');
    const bookmarkControls = document.createElement('div');

    bookmarkTitle.textContent = bookmark.name;
    bookmarkTitle.classList.add("bookmark-title");
    bookmarkTitle.title = bookmark.name; // Tooltip for long names

    // Open Button
    const playBtn = document.createElement("button");
    playBtn.className = "control-btn";
    const playImg = document.createElement("img");
    playImg.src = assetsURLMap["play"];
    playBtn.appendChild(playImg);
    playBtn.addEventListener("click", onPlay);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "control-btn delete";
    const deleteImg = document.createElement("img");
    deleteImg.src = assetsURLMap["delete"];
    deleteBtn.appendChild(deleteImg);
    deleteBtn.addEventListener("click", onDelete);

    bookmarkControls.append(playBtn, deleteBtn);
    bookmarkControls.classList.add("bookmark-controls");

    newBookmark.classList.add("bookmark");

    newBookmark.append(bookmarkTitle);
    newBookmark.append(bookmarkControls);

    newBookmark.setAttribute("url", bookmark.url);
    newBookmark.setAttribute("bookmark-id", bookmark.id);

    bookmarkSection.appendChild(newBookmark);
}

function onPlay(event) {
    // Traverse up to find the bookmark element
    const button = event.currentTarget;
    const bookmarkElement = button.closest('.bookmark');
    const problemUrl = bookmarkElement.getAttribute("url");
    window.open(problemUrl, "_blank");
}

function onDelete(event) {
    const button = event.currentTarget;
    const bookmarkItem = button.closest('.bookmark');
    const idToRemove = bookmarkItem.getAttribute("bookmark-id");
    bookmarkItem.remove();

    deleteItemFromStorage(idToRemove);
}

function deleteItemFromStorage(idToRemove) {
    chrome.storage.sync.get([AZ_PROBLEM_KEY], (data) => {
        const currentBookmarks = data[AZ_PROBLEM_KEY] || [];
        const updatedBookmarks = currentBookmarks.filter((bookmark) => bookmark.id !== idToRemove);
        chrome.storage.sync.set({ [AZ_PROBLEM_KEY]: updatedBookmarks });
    });
}

function onClearAll() {
    chrome.storage.sync.set({ [AZ_PROBLEM_KEY]: [] });
    viewBookmarks([]);
}