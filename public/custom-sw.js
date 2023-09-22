if (!self.define) {
    let e, i = {};
    const n = (n, r) => (n = new URL(n + ".js", r).href, i[n] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = n, e.onload = i, document.head.appendChild(e)
        } else e = n, importScripts(n), i()
    })).then((() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e
    })));
    self.define = (r, s) => {
        const o = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[o]) return;
        let c = {};
        const d = e => n(e, o),
            t = {
                module: {
                    uri: o
                },
                exports: c,
                require: d
            };
        i[o] = Promise.all(r.map((e => t[e] || d(e)))).then((e => (s(...e), c)))
    }
}
define(["./workbox-fa446783"], (function(e) {
    "use strict";
    self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "assets/index-be493f8c.css",
        revision: null
    }, {
        url: "assets/index-cb453829.js",
        revision: null
    }, {
        url: "index.html",
        revision: "f4c3d67e0b22c4c2f31629a7caa581ed"
    }, {
        url: "registerSW.js",
        revision: "1872c500de691dce40960bb85481de07"
    }, {
        url: "./img/icons/android-chrome-192x192.png",
        revision: "f130a0b70e386170cf6f011c0ca8c4f4"
    }, {
        url: "./img/icons/android-chrome-512x512.png",
        revision: "0ff1bc4d14e5c9abcacba7c600d97814"
    }, {
        url: "./img/icons/android-chrome-maskable-192x192.png",
        revision: "845a39478d0e2d4d5d32a092de2de250"
    }, {
        url: "./img/icons/android-chrome-maskable-512x512.png",
        revision: "2695f5feb66cdb0c6f09d0e415824cf9"
    }, {
        url: "manifest.webmanifest",
        revision: "8b14eb49346e6a73b023d7f8a8270998"
    }], {}), e.cleanupOutdatedCaches(), e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))
}));