




/*
     FILE ARCHIVED ON 2:58:11 jul 16, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:09:39 feb 14, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function($){jQuery(document).ready(function($){if(jQuery.fn.mediaelementplayer){jQuery('.powerpress-mejs-audio, .powerpress-mejs-video').mediaelementplayer();jQuery('.mejs-play button, .mejs-overlay-play').click(function(e){var container=jQuery(this).closest('.mejs-container');var html5player=container.find('video,audio');if(html5player.attr('src'))
{var srcTmp=html5player.attr('src');if(srcTmp.indexOf('#')!=-1){var tmp=srcTmp.replace(/^[^#]*#/,'');if(tmp!=srcTmp){e.preventDefault();var mejsplayer=jQuery(html5player)[0];if(mejsplayer){mejsplayer.setAttribute('src',tmp);mejsplayer.load();setTimeout(function(){mejsplayer.play();},900);return false;}}}}});}});}(jQuery));