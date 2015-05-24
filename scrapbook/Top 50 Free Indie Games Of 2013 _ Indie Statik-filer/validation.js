




/*
     FILE ARCHIVED ON 2:59:31 jul 16, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:09:42 feb 14, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
jQuery(document).ready(function(){var jval2={'title':function(){var ele=jQuery('#author');if(jQuery(ele).length){if(ele.val().length<3){jval2.errors=true;ele.removeClass('normal').addClass('error');}else{ele.removeClass('error').addClass('normal');}}},'email':function(){var ele=jQuery('#email');var patt=/^.+@.+[.].{2,}$/i;if(jQuery(ele).length){if(!patt.test(ele.val())){jval2.errors=true;ele.removeClass('normal').addClass('error');}else{ele.removeClass('error').addClass('normal');}}},'details':function(){var ele=jQuery('textarea#comment');if(ele.val().length<10){jval2.errors=true;ele.removeClass('normal').addClass('error');}else{ele.removeClass('error').addClass('normal');}}};jQuery("#commentform").submit(function(){jval2.errors=false;jval2.details();jval2.title();jval2.email();if(jval2.errors)
return false;});jQuery('#author').blur(jval2.title);jQuery('#email').blur(jval2.email);jQuery('#comment').blur(jval2.details);jQuery('#author').keyup(jval2.title);jQuery('#email').keyup(jval2.email);jQuery('#comment').keyup(jval2.details);});