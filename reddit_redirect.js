// ==UserScript==
// @name         A Better Old Reddit Redirect
// @version      1.0
// @description  Redirects reddit.com links to old.reddit.com, opens media in new tabs, and redirects .png and .jpeg links to redlib.perennialte.ch
// @match        *://*.reddit.com/*
// @exclude      *://www.reddit.com/poll/*
// @grant        none
// @run-at       document-start
// @license      MIT
// @namespace    https://raw.githubusercontent.com/korpez/reddit_redirect/refs/heads/main/reddit_redirect.js
// ==/UserScript==

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

            // Redirect .png and .jpeg links to redlib.perennialte.ch
           if ((url.hostname === 'i.redd.it' || url.hostname === 'preview.redd.it') && (url.pathname.endsWith('.png') || url.pathname.endsWith('.jpeg') || url.pathname.endsWith('.gif'))) {
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

            // Redirect www.reddit.com to old.reddit.com
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
