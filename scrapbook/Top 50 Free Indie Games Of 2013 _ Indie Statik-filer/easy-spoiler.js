




/*
     FILE ARCHIVED ON 2:58:13 jul 16, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:09:39 feb 14, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function wpSpoilerToggle(id,doAnim,showName,hideName,speed,doIframes)
{var myName=id+'_action';var b=document.getElementById(myName);var e=document.getElementById(id);if(e.style.display=='block')
{if(doAnim)
{jQuery("#"+ id).slideUp(speed);}
else
{e.style.display='none';}
b.nodeValue=showName;b.innerText=showName;if(navigator.userAgent.indexOf("Firefox")!=-1)
{b.firstChild.nodeValue=showName;}}
else
{if(doAnim)
{jQuery("#"+ id).fadeIn(speed);}
e.style.display='block';b.value=hideName;b.innerText=hideName;if(navigator.userAgent.indexOf("Firefox")!=-1)
{b.firstChild.nodeValue=hideName;}
if(doIframes&&doIframes!="false")
{jQuery("#"+ id).find('iframe').each(function(i){autoResize(this);});}}
return false;}
function autoResize(iframe)
{iframe.height=iframe.contentWindow.document.body.scrollHeight;iframe.width=iframe.contentWindow.document.body.scrollWidth;}
function wpSpoilerHide(id,doAnim,showName,speed)
{var myName=id+'_action';var me=document.getElementById(myName);var e=document.getElementById(id);if(e.style.display=='block')
{if(doAnim)
{jQuery("#"+ id).slideUp(speed);}
e.style.display='none';me.value=showName;me.innerText=showName;if(navigator.userAgent.indexOf("Firefox")!=-1)
{me.firstChild.nodeValue=showName;}}}
function wpSpoilerSelect(objId)
{if(document.selection)
{document.selection.empty();}
else
{if(window.getSelection)
{window.getSelection().removeAllRanges();}}
if(document.selection)
{var range=document.body.createTextRange();range.moveToElementText(document.getElementById(objId));range.select();}
else if(window.getSelection)
{var range=document.createRange();range.selectNode(document.getElementById(objId));window.getSelection().addRange(range);}}