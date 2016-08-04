// ==UserScript==
// @name        Actu GTP
// @namespace   https://realitygaming.fr/
// @include     https://realitygaming.fr/
// @include     https://realitygaming.fr/chatbox
// @version     1
// @description Les nouvelles actus de la GTP !
// @author Virtual
// @match https://realitygaming.fr/
// @grant       none
// ==/UserScript==
$(document).ready(function(){
    $.getScript('https://rawgit.com/VirtualRG/Gtpactu/master/script.js');
});
