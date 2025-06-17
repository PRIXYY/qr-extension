# 🔳 Simple QR Generator – Firefox Extension

This browser extension generates a **QR code for the current tab's URL** with a single click. Ideal for sharing links quickly across devices!

---

## 📦 Features
- One-click QR code generation  
- Works on any website  
- No special permissions required  
- Lightweight and fast  

---

## ⚙️ How It Works

- The extension adds an icon to the Firefox toolbar.
- Clicking the icon opens a popup.
- The popup automatically grabs the current tab's URL and displays it as a QR code using `qrcode.min.js`.

---

## 🚀 Installation (Temporary Load)

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`
2. Click **“Load Temporary Add-on...”**
3. Select the `manifest.json` file in this extension folder
4. Click the extension icon in your toolbar to generate a QR code for the current page!

---

## 🧩 Dependencies

- [QRCode.js](https://github.com/davidshimjs/qrcodejs) – included locally as `qrcode.min.js`

---

## 🖼️ Icons

Provide your own `icon16.png`, `icon48.png`, and `icon128.png`. These are used in the toolbar and add-on listings.

You can create free icons using:
- https://favicon.io
- https://realfavicongenerator.net/

---

