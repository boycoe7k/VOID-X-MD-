<div align="center">

## VOID-X-MD

[![Made with Baileys](https://img.shields.io/badge/Made%20with-Baileys-00bcd4?style=for-the-badge)](https://github.com/WhiskeySockets/Baileys)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<img src="utils/bot_image.jpg" alt="VOID-X-MD" width="260">

</div>

VOID-X-MD is a WhatsApp MD bot built on top of the **Baileys** library.  
It's designed to be fast, lightweight, and easy to customize without touching the core code.  
This project is **fully open source** — you can modify it, rebrand it, and make your **own bot** from this codebase **free of cost**, without needing any permission from our side.  
All commands and the overall structure are written in a way that makes customization (bot image, prefix, name, features, etc.) as easy as possible.

📢 **Official Channel:** [Join VOID-X-MD on WhatsApp](https://whatsapp.com/channel/0029VbBxPYN2kNFj3I1H1e0f)
👤 **Owner:** +263716808196

---


## ✨ Features

- **Fully Open Source** – entire codebase is editable; host it anywhere (Heroku, panel, VPS, etc.).  
- **Easy Customization via Commands** – change **bot image**, **prefix**, **channel/newsletter**, **bot name**, etc. with simple commands.  
- **Modular Command System** – commands are organized in the `commands` folder for easy editing.  
- **Optimized for Stability** – RAM‑optimized media handling (streaming, temp cleanup), better session handling via `sessionID` in `config.js`.  
- **Owner Utilities** – restart, update from ZIP, and more owner‑only tools.

---

### 1. Fork the Repository

<div align="center">

<a href="https://github.com/boycoe7k/VOID-X-MD-/fork" target="_blank">
  <img src="https://img.shields.io/badge/Fork%20Repository-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Fork on GitHub">
</a>

</div>

> This creates your own copy of `VOID-X-MD` under your GitHub account.

---

### 2. Get Pair Code

Deploy a small helper to generate a **pair code** and obtain your session string, or use our hosted pairing site.

<div align="center">

<a href="https://whatsapp.com/channel/0029VbBxPYN2kNFj3I1H1e0f" target="_blank">
  <img src="https://img.shields.io/badge/Join-Our%20Channel-25D366?style=for-the-badge&logo=whatsapp" alt="Join Channel">
</a>

</div>

After scanning, you will receive a **session string** starting with:

```text
VOID-X-MD!H4....
```

Copy that full string and paste it into `config.js`:

```js
sessionID: 'VOID-X-MD!H4.....'
```

Or set it via the `SESSION_ID` environment variable when hosting.

---

### 3. Deploy on Panel (Katabump, etc.)

<div align="center">

<a href="https://dashboard.katabump.com/auth/login#d6b7d6" target="_blank">
  <img src="https://img.shields.io/badge/Deploy%20on-Katabump-orange?style=for-the-badge" alt="Deploy on Katabump">
</a>

</div>

For a full step‑by‑step deployment tutorial (panels / VPS / Heroku), add or update your YouTube guide here:

<div align="center">
  <a href="https://youtu.be/4PQcn-qqrcE">
    <img src="https://img.shields.io/badge/Deploy Tutorial-dc3545?style=for-the-badge&logo=youtube" alt="YouTube Link"/>
  </a>
</div>

---

## 🛠 Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/boycoe7k/VOID-X-MD-.git
cd VOID-X-MD
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure session

Edit `config.js`:

- **Option A: Use session string** (recommended for hosting panels)

  ```js
  sessionID: 'VOID-X-MD!H4.....'
  ```

- **Option B: Pairing Code** (use this if you only have ONE phone — no QR scan needed)

  ```js
  pairingNumber: '263712345678'   // your WhatsApp number, no + or spaces
  ```

  Run the bot — a **pairing code** will print in the console/terminal.
  On the *same* phone, open WhatsApp → **Settings → Linked Devices → Link a Device →
  "Link with phone number instead"** and type in the code shown.

- **Option C: Scan QR**

  ```js
  sessionID: '',
  pairingNumber: ''
  ```

  Run the bot and scan the QR from the terminal using a second device.

### 4️⃣ Run the bot

```bash
node index.js
```

When the bot starts:

- If `sessionID` is empty, a **QR code** will appear in the terminal – scan it using **Linked Devices** in WhatsApp.  
- If `sessionID` is set, it will log in using that session string.

---

## 🌐 Community

<div align="center">

<a href="https://whatsapp.com/channel/0029VbBxPYN2kNFj3I1H1e0f" target="_blank">
  <img src="https://img.shields.io/badge/Join-WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Join WhatsApp Channel">
</a>

</div>

---

## 🙏 Credits

- **Boycoe-dev** – Main developer & maintainer
- **Tcroneb Hackx** – Co-developer & maintainer
- **Baileys** – WhatsApp Web API library (`@whiskeysockets/baileys`)
- Other open‑source libraries listed in `package.json`

---

## 📢 Join Our Channel

<div align="center">

<a href="https://whatsapp.com/channel/0029VbBxPYN2kNFj3I1H1e0f" target="_blank">
  <img src="https://img.shields.io/badge/Join-WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Join WhatsApp Channel">
</a>

</div>

If you find this project helpful, consider joining my channel — your support helps maintain and improve this open-source project.

<div align="center">

<img src="utils/bmc_qr.png" alt="VOID-X-MD Channel QR Code" width="200">

</div>

---


## ⚠️ Important Warning

- This bot is created **for educational purposes only**.  
- This is **NOT** an official WhatsApp bot.  
- Using third‑party bots **may violate WhatsApp’s Terms of Service** and can lead to your account being **banned**.

> You use this bot **at your own risk**.  
> The developers are **not responsible** for any bans, issues, or damages resulting from its use.

---

## 📝 Legal

- This project is **not affiliated with, authorized, maintained, sponsored, or endorsed** by WhatsApp Inc. or any of its affiliates or subsidiaries.  
- This is **independent and unofficial software**.  
- **Do not spam** people using this bot.  
- **Do not** use this bot for bulk messaging, harassment, or any **illegal activities**.  
- The developers assume **no liability** and are **not responsible** for any misuse or damage caused by this program.

---

## 📄 License (MIT)

This project is licensed under the **MIT License**.

You must:

- Use this software in compliance with **all applicable laws and regulations**.  
- Keep the **original license and copyright** notices.  
- **Credit the original authors**.  
- **Not** use this for spam, abuse, or malicious purposes.

---

## 📜 Copyright Notice

Copyright (c) **2026 Boycoe-dev**.  
All rights reserved.

This project contains code from various open‑source projects and AI tools, including but not limited to:

- **Baileys** – MIT License  
- Other libraries as listed in `package.json`

