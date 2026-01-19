# 🧩 AZ Problem Tracker

<div align="center">
  <p>
    <strong>Track your AlgoZenith problems effortlessly with a modern, sleek Chrome Extension.</strong>
  </p>
  <p>
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a>
  </p>
</div>

---

## 🚀 Overview

**AZ Problem Tracker** is a powerful productivity tool designed for the [maang.in](https://maang.in) platform. It allows developers to bookmark coding problems, track their progress, and manage their to-do list directly from the browser toolbar. With a completely redesigned interface and enhanced performance, keeping track of your DSA journey has never been easier.

## ✨ Features

- **🔖 Seamless Bookmarking**: Adds a native-style "Bookmark" button directly to the problem page interface.
- **🎨 Modern Aesthetics**: A beautiful, clean popup UI featuring **Inter** typography, hover effects, and a polished color palette.
- **🔄 Sync Storage**: Your bookmarks utilize `chrome.storage.sync`, meaning they persist across all your logged-in Chrome devices.
- **🔔 Smart Badge**: The extension icon displays a live badge count of your pending problems, keeping you motivated.
- **⚡ One-Click Actions**: instantly open problems to solve or delete them when you're done.
- **🧹 Clear All**: A "Clear All" utility to reset your list and start fresh.

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
    - Click the puzzle piece icon in your Chrome toolbar and pin **AZ Problem Tracker** for easy access.

## 📖 Usage

1.  Navigate to any problem on [maang.in](https://maang.in/problems).
2.  You will see a blue **Bookmark** icon next to the "Ask Doubt" button. Click it to save the problem.
3.  Click the extension icon to view your list.
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