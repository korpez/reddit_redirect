# 🚀  A Better Old Reddit Redirect Userscript 🌟

## [Link to Raw URL for Install](https://raw.githubusercontent.com/korpez/reddit_redirect/refs/heads/main/reddit_redirect.js)

## 🎯 This lightweight userscript automatically redirects you away from the bloated, invasive modern [Reddit](https://www.reddit.com) to the [faster, cleaner classic interface.](https://old.reddit.com)

- 🖼️✨ **Smarter Media Viewing:** Automatically opens media in new tabs and redirects `.png`, `.jpeg`, `.jpg`, `.webp`, and `.gif` images from `i.redd.it` and `preview.redd.it` to the privacy-friendly `redlib.perennialte.ch` mirror.

- 💡 For more on why `www.reddit.com` may include invasive hidden features and how `old.reddit.com` avoids them, see [Redlib's explanation](https://github.com/redlib-org/redlib?tab=readme-ov-file#reddit). For general info about Redlib, visit [the official Redlib README](https://github.com/redlib-org/redlib/blob/main/README.md).

- ✏️ Want to use a different Redlib instance? Simply replace the base URL (`https://redlib.perennialte.ch`) in the userscript `.js` file with your preferred Redlib domain.

## 🧭 **Why Old Reddit?**
Old.reddit.com isn’t just a nostalgic throwback—it’s a performance-first, privacy-focused alternative to Reddit’s 2023 redesign. That update introduced far more than a visual overhaul: it bundled Google reCAPTCHA into nearly every page load, added a sprawling telemetry API, and pushed an architecture that tracks user behavior aggressively.

By switching to Old Reddit, you bypass this surveillance-heavy infrastructure entirely. You get a minimal, content-first layout with virtually no tracking and a far snappier browsing experience.

---

## 🚨 Features

- 🔁 **Full Page Redirect:** Instantly redirects `www.reddit.com` to `old.reddit.com`, even on page load!
- 🔄 **Link Rewriting:** Converts all internal Reddit links to the `old.reddit.com` urls.
- 🖼️ **Image Mirror Redirect:** Automatically routes supported image files to `redlib.perennialte.ch`.
- 🔗 **New Tab for Media:** Opens media content (images, videos) in new tabs with proper security headers.

---

## ✅ Compatibility

- 🧪 Tested with Chrome, Firefox, and Edge
- 🧩 Works with Tampermonkey, Violentmonkey
- 💯 No dependencies or external libraries

## 📥 Installation

1. 🌐 Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/get-it/).
2. 🧩 Use one of the install links below.
3. ✅ Save and activate the script.

## 📦 Install Links
- 🔶 [Install via Github](https://github.com/korpez/reddit_redirect/releases/latest)
- 🔗 [Install via GitHub (Raw)](https://raw.githubusercontent.com/korpez/reddit_redirect/main/reddit_redirect.js)
- 🧩 [Install via OpenUserJS](https://openuserjs.org/install/korpez/A_Better_Old_Reddit_Redirect.user.js)
- 📄 [View Metadata on OpenUserJS](https://openuserjs.org/meta/korpez/A_Better_Old_Reddit_Redirect.meta.js)
- 📁 [GitHub Repository](https://github.com/korpez/reddit_redirect)
- 🧬 [Git URL](https://github.com/korpez/reddit_redirect.git)
  
---

## 🛠️ Usage

💡 Just browse Reddit normally. The script will:
- Instantly redirect `www.reddit.com` pages to `old.reddit.com`
- Clean up all links
- Route supported image content to `redlib`

No setup. No configuration. Pure browsing bliss.

---

## 📜 License

Distributed under the MIT License. See the [LICENSE](LICENSE) file for details.

# Engineered by [**korpez**](https://github.com/korpez) to promote a faster, cleaner web experience for you and yours. 🐧


*For a more private and streamlined Reddit experience, consider implementing privacy tools such as uBlock Origin and other privacy extensions that help combat reCAPTCHA and various trackers—especially when configured to disable Reddit’s own tracking domains like pixel.redditmedia.com and events.reddit.com using advanced mode and custom filters. For an extra layer of security, consider using a hardened browser such as LibreWolf, Mullvad Browser, or Ungoogled Chromium, or even disabling JavaScript for Reddit browsing, as these measures can significantly reduce your digital footprint. Additionally, containerization via Firefox Containers further bolsters your defenses against invasive data collection.*
