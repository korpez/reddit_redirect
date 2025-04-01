// ==UserScript==
// @name         A Better Old Reddit Redirect
// @version      1.0
// @namespace    https://github.com/korpez/reddit_redirect
// @description  Redirects reddit.com links to old.reddit.com, opens media in new tabs, and redirects .png, .jpeg, .jpg, .webp, and .gif links from i.redd.it and preview.redd.it to redlib.perennialte.ch
// @match        *://*.reddit.com/*
// @exclude      *://www.reddit.com/poll/*
// @grant        none
// @run-at       document-start
// @license      MIT
// @updateURL    https://openuserjs.org/meta/korpez/A_Better_Old_Reddit_Redirect.meta.js
// @downloadURL  https://openuserjs.org/install/korpez/A_Better_Old_Reddit_Redirect.user.js
// @copyright    2025, korpez (https://openuserjs.org/users/korpez)
// ==/UserScript==

// Immediate redirect if current page is www.reddit.com
if (location.hostname === 'www.reddit.com' && location.pathname !== '/media') {
    location.hostname = 'old.reddit.com';
}

(function() {
    'use strict';

    const mediaHosts = ['i.redd.it', 'v.redd.it', 'preview.redd.it', 'redditmedia.com'];

    const isMediaLink = (url) => mediaHosts.some(host => url.hostname.includes(host));

    const isRedditMediaRedirect = (url) => url.hostname.endsWith('reddit.com') && url.pathname === '/media';

    const updateLink = (link) => {
        try {
            const url = new URL(link.href);

            // Never modify Reddit's media redirect URLs
            if (isRedditMediaRedirect(url)) return;

            // Redirect supported image formats from i.redd.it and preview.redd.it to redlib.perennialte.ch
            const imageExtensions = ['.png', '.jpeg', '.jpg', '.webp', '.gif'];
            if ((url.hostname === 'i.redd.it' || url.hostname === 'preview.redd.it') &&
                imageExtensions.some(ext => url.pathname.endsWith(ext))) {
                link.href = `https://redlib.perennialte.ch/img${url.pathname}`;
                link.target = '_blank';
                link.rel = 'noopener';
                return;
            }

            // If it's a direct media link, open it in a new tab without redirection
            if (isMediaLink(url)) {
                link.target = '_blank';
                link.rel = 'noopener';
                return;
            }

            // Redirect www.reddit.com to old.reddit.com (handled above too)
            if (url.hostname === 'www.reddit.com') {
                url.hostname = 'old.reddit.com';
                link.href = url.toString();
            }

        } catch (e) {}
    };

    const processLinks = () => {
        document.querySelectorAll('a[href*="reddit.com"], a[href*="redd.it"]').forEach(updateLink);
    };

    const observer = new MutationObserver(processLinks);
    observer.observe(document, { childList: true, subtree: true });

    window.addEventListener('load', processLinks);
})();
