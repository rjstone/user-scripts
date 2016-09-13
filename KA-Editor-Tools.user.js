// ==UserScript==
// @name        KA Editor Tools
// @version     0.1.1
// @namespace   https://www.khanacademy.org/profile/KnowMoreStuff/
// @updateURL   none:
// @icon        https://dl.dropboxusercontent.com/u/57161259/icons/cs-ohnoes-icon.png
// @homepageURL http://makeyourownsite.kissr.com/
// @author      Robert Stone
// @description Modifications/fixes for the Ace Editor embedded in Khan Academys programming projects.
// @include     http*://www.khanacademy.org/computer-programming/*
// @include     https://www.khanacademy.org/computing/computer-programming/*/*/p/*
// @grant       GM_log
// @run-at      document-idle
// ==/UserScript==

(function() {
    'use strict';

    function waitForAjax() {
        var ed;
        var liveEd;
        try {
            liveEd = ScratchpadUI.liveEditor;
            ed = ScratchpadUI.liveEditor.editor.editor;
        } catch (e) {
            GM_log("KAET: Ajax not loaded yet.");
            return;
        }
        clearTimeout(timer);
        GM_log("KAET: Ajax loaded. Timer cleared.");

        ed.setShowInvisibles(true);

        $(".scratchpad-wrap-outer>div:first-child").attr("style","max-width: 100% !important");

        if (liveEd.editorType === "ace_webpage") {
            $("div.scratchpad-canvas-wrap").attr("style","width: 400px; right: 0; left: auto;");
            ed.resize();
        }
    }
    var timer = setInterval(waitForAjax, 1000);
    GM_Log("KAET: Started ajax wait timer.");

})();
