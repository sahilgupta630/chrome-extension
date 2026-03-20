# 🧩 DSA Problem Tracker

<div align="center">
  <p>
    <strong>A modern, sleek Chrome Extension to effortlessly track your coding problems.</strong>
  </p>
  <p>
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a>
  </p>
</div>

---

## 🚀 Overview

**DSA Problem Tracker** is a powerful productivity tool designed to help you keep track of problems on coding platforms (such as `maang.in`). It allows developers to bookmark coding problems, track their progress, and manage their to-do list directly from the browser toolbar. With a clean interface and optimized performance, keeping track of your problem-solving journey has never been easier.

## ✨ Features

- **🔖 Seamless Bookmarking**: Adds a native-style "Bookmark" button directly to the problem page interface.
- **🎨 Modern Aesthetics**: A beautiful, clean popup UI with a polished color palette and typography.
- **🔄 Sync Storage**: Your bookmarks utilize `chrome.storage.sync`, meaning they persist across all your logged-in Chrome devices.
- **🔔 Smart Badge**: The extension icon displays a live badge count of your pending problems, keeping you motivated.
- **⚡ One-Click Actions**: Instantly open problems to solve or delete them when you're done.
- **🧹 Clear All**: A utility to reset your list and start fresh.

## 🛠️ Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/sahilgupta630/chrome-extension.git
    cd chrome-extension
    ```

2.  **Load into Chrome**
    - Open Chrome and navigate to `chrome://extensions/`.
    - Toggle **Developer Mode** on in the top right corner.
    - Click **Load unpacked**.
    - Select the **`Final Code`** folder from the cloned directory.

3.  **Pin It!**
    - Click the puzzle piece icon in your Chrome toolbar and pin the extension for easy access.

## 📖 Usage

1.  Navigate to a coding problem page (e.g., `maang.in/problems` for reference).
2.  You will see a **Bookmark** icon. Click it to save the problem.
3.  Click the extension icon in your browser to view your list.
4.  Click the **Play** button to open a problem, or **Trash** to remove it.
5.  Use **Clear All** in the footer to empty your list.

## 📁 Project Structure

```text
chrome-extension/
├── Final Code/          # 🟢 The complete, production-ready extension
│   ├── assets/          # Icons and images
│   ├── background.js    # Service worker for badge updates
│   ├── content.js       # Content script for page integration
│   ├── manifest.json    # Extension configuration (MV3)
│   ├── popup.html       # Popup interface
│   ├── popup.css        # Styling
│   └── popup.js         # Popup logic
└── Starter Files/       # 🟡 Boilerplate for learning purposes
```

---