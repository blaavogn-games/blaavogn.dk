




/*
     FILE ARCHIVED ON 2:58:12 jul 16, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:09:39 feb 14, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function($){function anti_spam_init(){$('.comment-form-ant-spm, .comment-form-ant-spm-2').hide();var answer=$('.comment-form-ant-spm input#ant-spm-a').val();$('.comment-form-ant-spm input#ant-spm-q').val(answer);var current_date=new Date();var current_year=current_date.getFullYear();if($('#comments form input#ant-spm-q').length==0){$('#comments form').append('<input type="hidden" name="ant-spm-q" id="ant-spm-q" value="'+current_year+'" />');}
if($('#respond form input#ant-spm-q').length==0){$('#respond form').append('<input type="hidden" name="ant-spm-q" id="ant-spm-q" value="'+current_year+'" />');}
if($('form#commentform input#ant-spm-q').length==0){$('form#commentform').append('<input type="hidden" name="ant-spm-q" id="ant-spm-q" value="'+current_year+'" />');}}
$(document).ready(function(){anti_spam_init();});$(document).ajaxSuccess(function(){anti_spam_init();});})(jQuery);