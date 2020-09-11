$.jPrintArea=function(el){
var iframe=document.createElement('IFRAME');
var doc=null;
$(iframe).attr('style','position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
document.body.appendChild(iframe);
doc=iframe.contentWindow.document;
var links=window.document.getElementsByTagName('print');
for(var i=0;i<links.length;i++)
if(links[i].rel.toLowerCase()=='stylesheet')
var linkSheet = '';
doc.write('<style>.btClose,.btPrint{display:none;}.mainTxt{padding:10px;background:#ccc;float:left; margin: 0; margin-right:30px}.madori{clear:both;}.space{font-size:12px;}.space strong{ font-size:16px;}.sSpec,.txt{font-size:10px; lin-height: 15px;}.msCaption{font-size:10px; lin-height: 15px;}</style>');
doc.write('<div class="'+$(el).attr("class")+'">'+$(el).html()+'</div>');
doc.close();
$(iframe).contents().find('div').html($(el).html());

iframe.contentWindow.focus();
iframe.contentWindow.print();
if(jQuery.browser.mozilla){alert('しばらくお持ち下さい');}
document.body.removeChild(iframe);
}