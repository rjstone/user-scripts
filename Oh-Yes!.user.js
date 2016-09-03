// ==UserScript==
// @name        Oh Yes!
// @version     1.1
// @namespace   https://www.khanacademy.org/profile/KnowMoreStuff/
// @updateURL   https://openuserjs.org/meta/KnowMoreStuff/Oh_Yes!.meta.js
// @icon        https://dl.dropboxusercontent.com/u/57161259/icons/cs-ohnoes-icon.png
// @homepageURL http://makeyourownsite.kissr.com/
// @author      Robert Stone
// @description Oh Yes! Oh Noes! The Error Buddy is now much less annoying on Khan Academy.
// @include     http*://www.khanacademy.org/computer-programming/*
// @include     http*://www.khanacademy.org/computing/computer-programming/*/*/p/*
// @version     1.1
// @grant       GM_log
// @run-at      document-idle
// ==/UserScript==

// Yes, I know I could probably use jQuery, but @require doesn't work properly in all browser environs.

(function() {
    'use strict';

    var timer;

    function ohYes() {

        // Oh Yes! Oh Noes! is going away...
        var ohnoes = document.getElementsByClassName("error-buddy")[0];
        if (ohnoes) {
            ohnoes.parentNode.removeChild(ohnoes);
        }

        // ...but we want to keep the error messages in a less annoying form.
        var tipbar = document.getElementsByClassName("tipbar")[0];
        if (tipbar) {

            // Restyle the tip bar for its new location.
            var ts = tipbar.style;
            //This gets toggleed between none and block by the site js, so it can't be modified for long.
            //ts.display = "block";
            ts.position = "fixed";
            ts.left = "auto";
            ts.top = "auto";
            ts.bottom = "20px";
            ts.right = "20px";
            ts.width = "300px";
            ts.height = "auto";
            ts.marginTop = "0";
            ts.marginBottom = "0";
            ts.backgroundColor = "rgb(247, 151, 52)";
            ts.zIndex = "99";

            // The text "Oh no!" that always appears is useless since it conveys no information.
            var ohno = tipbar.getElementsByClassName("oh-no")[0];
            if (ohno) {
                ohno.parentElement.removeChild(ohno);
            }

            // The speech bubble arrow will no longer be needed.
            var sa = tipbar.getElementsByClassName("speech-arrow")[0];
            if (sa) {
                sa.parentElement.removeChild(sa);
            }

            // Clear the timer now that we can be pretty sure we have succeeded.
            clearTimeout(timer);
        }
    }

    // I don't know of a better way of dealing with the ajax than to check every second until
    // we find the elements we want.
    timer = setInterval(ohYes, 1000);

})();
