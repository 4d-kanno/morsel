/*
 * jqDnR - Minimalistic Drag'n'Resize for jQuery.
 *
 * Copyright (c) 2007 Brice Burgess <bhb@iceburg.net>, http://www.iceburg.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * $Version: 2007.08.19 +r2
 */

(function($){
$.fn.jqDrag=function(h){return i(this,h,'d');};
$.fn.jqResize=function(h){return i(this,h,'r');};
$.jqDnR={dnr:{},e:0,
drag:function(v){
 if(M.k == 'd')E.css({left:M.X+v.pageX-M.pX,top:M.Y+v.pageY-M.pY});
 else E.css({width:Math.max(v.pageX-M.pX+M.W,0),height:Math.max(v.pageY-M.pY+M.H,0)});
  return false;},
stop:function(){E.css('opacity',M.o);$(document).unbind('mousemove',J.drag).unbind('mouseup',J.stop);}
};
var J=$.jqDnR,M=J.dnr,E=J.e,
i=function(e,h,k){return e.each(function(){h=(h)?$(h,e):e;
 h.bind('mousedown',{e:e,k:k},function(v){var d=v.data,p={};E=d.e;
 // attempt utilization of dimensions plugin to fix IE issues
 if(E.css('position') != 'relative'){try{E.position(p);}catch(e){}}
 M={X:p.left||f('left')||0,Y:p.top||f('top')||0,W:f('width')||E[0].scrollWidth||0,H:f('height')||E[0].scrollHeight||0,pX:v.pageX,pY:v.pageY,k:d.k,o:E.css('opacity')};
 //E.css({opacity:0.8});
 $(document).mousemove($.jqDnR.drag).mouseup($.jqDnR.stop);
 return false;
 });
});},
f=function(k){return parseInt(E.css(k))||false;};
})(jQuery);


/**
 * position_fixed
 * 
 */
(function($j){
	$j.positionFixed = function(el){
		$j(el).each(function(){
        	new fixed(this)
		})
		return el;					
	}
	$j.fn.positionFixed = function(){
		return $j.positionFixed(this)
	}
	var fixed = $j.positionFixed.impl = function(el){
		this.target = $j(el).css('position','fixed')
		if(!this.ie6)return;
		this.bindEvent();
	}
	$j.extend(fixed.prototype,{
		ie6 : $.support.msie && $.support.version < 7.0,
		bindEvent : function(){
			var target=this.target;
			target
			.css('position','absolute')
            .basePos = {
                top: parseInt(target.css('top')) || 0,
                right: parseInt(target.css('right')) || 0
            }
            target.parents().each(function(){
                var o = $j(this);
                if (o.css('position') == 'relative') 
                    o.after(target)
            })
			$j(window).scroll(this.scrollEvent());
		},
		scrollEvent : function(){
			var target=this.target;
			return function(){
                target.css({
                    top: $j(document).scrollTop() + target.basePos.top,
                    right: $j(document).scrollLeft() + target.basePos.right
                })
			}
		}
	})
})(jQuery)


 

function floatBnr() {
	//being able to move
	$('#float, #float02').positionFixed();
	$('#floatArea').jqDrag();
}

function floatClose() {
	//floatBnr close
	$('#floatArea, #floatArea02').hide();
	//$('#floatArea').fadeOut("slow"); //fadeOut
}

function floatClosePlay() {
	//floatBnr close
	$('.uniqFloatArea').hide();
	//$('#floatArea').fadeOut("slow"); //fadeOut
}

