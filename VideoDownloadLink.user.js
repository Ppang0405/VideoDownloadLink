// ==UserScript==
// @name         VideoDownloadLink
// @namespace    https://github.com/taktheh/VideoDownloadLink
// @version      0.0.9
// @description  Relocate to the download page of the embeded video.
// @author       Takamaro the Hentai
// @downloadURL  https://github.com/taktheh/VideoDownloadLink/raw/master/VideoDownloadLink.user.js
// @include      https://openload.co/embed/*
// @include      https://oload.life/embed/*
// @include      https://vidoza.net/embed-*
// @include      https://www.rapidvideo.com/e*
// @include      https://streamcherry.com/embed/*
// @include      https://verystream.com/e/*
// @include      https://asianclub.tv/v/*
// @include      https://mm9841.com/v/*
// @include      https://*embed.*/v/*
// @grant        none
// ==/UserScript==

(function(l) {
    'use strict';

    const ReplaceList = [
        [ 'oload.life/embed/', 'openload.co/f/' ],
        [ 'vidoza.net/embed-', 'vidoza.net/' ],
        [ 'rapidvideo.com/e[^/]*/', 'rapidvideo.com/?v=' ],
        [ 'verystream.com/e/', 'verystream.com/stream/' ],
        [ '/v/', '/f/' ],
        [ '/embed/', '/f/' ],
    ];

    function dlink(l) {
        var div = document.createElement("div");
        var a = document.createElement("a");
        var button = document.createElement("button");
        a.href = l;
        a.textContent = "DL";
        a.target = "_top";
        a.style.cssText = "font:menu;color:gray;";
        button.textContent = "☓";
        button.style.cssText =
            "margin:0;padding:0;font:menu;color:black;line-height:100%;";
        button.onclick = function () {
            document.body.removeChild(window.VideoDownloadLinkPopup);
        };
        div.id = "VideoDownloadLinkPopup";
        div.style.cssText =
            "position:fixed;z-index:2147483647;" +
            "top:2em;right:0;background:white;opacity:0.7;font:menu;";
        div.appendChild(a);
        div.appendChild(button);
        document.body.appendChild(div);

        return true;
    }

    ReplaceList.find(e => {
        var r = new RegExp(e[0]);
        return r.test(l) && dlink(l.replace(r, e[1]));
    });
})(location.href);
