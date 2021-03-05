/**
 * @name main.js
 * @fileOverview
 * @version 1.0
 * @description
 * <p>(c) FOURDIGIT Inc. Licensed <a href="http://ja.wikipedia.org/wiki/GNU_General_Public_License">GNU General Public License</a>.</p>
 */

/* webfont読み込み */
   window.WebFontConfig = {
     google: { families: ['Noto+Serif+JP:400,700:japanese'] },
     active: function() {
       sessionStorage.fonts = true;
     }
   };

  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

//最初に実行グループ
$(window).load(function () {

  /* pagetop */
  var showFlag = false;
  var topBtn = $('.pagetop');
  topBtn.css('opacity', '0');
  var showFlag = false;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      if (showFlag == false) {
        showFlag = true;
        topBtn.stop().animate({'opacity' : '1'}, 200);
      }
    } else {
      if (showFlag) {
        showFlag = false;
        topBtn.stop().animate({'opacity' : '0'}, 200);
      }
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
	  $('body,html').animate({
  	  scrollTop: 0
  	}, 700);
  	return false;
	});

  /* hover class追加 */
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    // スマートフォン用コード
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    // タブレット用コード
  } else {
    // PC用コード
		$('a, input[type="button"], input[type="submit"], button, .touch-hover').hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
  }

  /* ポップアップ */
	var
	w       = 690,
	h       = 800,
	l       = (screen.availWidth - w) / 2,
	t       = (screen.availHeight - h) / 2,
	popPage = '.popup';

	$(popPage).on('click',function(event){
		window.open(this.href,"","width= "+ w + ",height=" + h + ",left=" + l + ",top=" + t + ", scrollbars = yes, location = no, toolbar = no, menubar = no, status = no");
		 return false;
	});

  /* ハンバーガーメニュー */
  $('.sp_menu_btn_menu').on('click',function () {
    $(this).toggleClass('active');
    $('#gNav').slideToggle();
  });
  $('#gNav .close').on('click',function () {
    $('.sp_menu_btn_menu').removeClass('active');
    $('#gNav').slideToggle();
  });
});//最初に実行グループ

/* アニメーション開始 */
// $(window).on('load resize',function(){
// 	if(window.innerWidth > 767) {
// 		AOS.init({
// 			offset: 200,
// 			duration: 1200,
// 			once: true
// 		});
// 	}
// });


//tabコンテンツ(slick)
$(function(){
  var sliderTab = ".tabCont"; // tab
  var thumbnailItemTab = ".tabBtnWrap .thumTab a"; // tabBtn

  // サムネイル画像アイテムに data-index でindex番号を付与
  $(thumbnailItemTab).each(function(){
    var index = $(thumbnailItemTab).index(this);
    $(this).attr("data-index",index);
  });

  // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  // 「slickスライダー作成」の前にこの記述は書いてください。
  $(sliderTab).on('init',function(slick){
    var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(thumbnailItemTab+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });

  //slickスライダー初期化
  $(sliderTab).slick({
    autoplay: false,
    arrows: false,
    fade: true,
  });

  //サムネイル画像アイテムをクリックしたときにスライダー切り替え
  $(thumbnailItemTab).on('click',function(){
    var index = $(this).attr("data-index");
    $(sliderTab).slick("slickGoTo",index,false);
  });

  //サムネイル画像のカレントを切り替え
  $(sliderTab).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItemTab).each(function(){
        $(this).removeClass("thumbnail-current");
    });
    $(thumbnailItemTab+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
  });
});


//スライダー(slick)
$(function(){
  var slider = ".slider-for"; // スライダー
  var thumbnailItem = ".slider-nav .thum"; // サムネイル画像アイテム

  // サムネイル画像アイテムに data-index でindex番号を付与
  $(thumbnailItem).each(function(){
    var index = $(thumbnailItem).index(this);
    $(this).attr("data-index",index);
  });

  // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  // 「slickスライダー作成」の前にこの記述は書いてください。
  $(slider).on('init',function(slick){
    var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
    $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });

  //slickスライダー初期化
  $(slider).slick({
    autoplay: true,
    arrows: false,
    fade: true,
    infinite: true //これはつけましょう。
  });
  //サムネイル画像アイテムをクリックしたときにスライダー切り替え
  $(thumbnailItem).on('click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });

  //サムネイル画像のカレントを切り替え
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
        $(this).removeClass("thumbnail-current");
    });
    $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
  });
});

  //modal
  $(function () {
    $('.openModal').click(function (e) {
      e.preventDefault();
      $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg').click(function (e) {
      e.preventDefault();
      $('#modalArea').fadeOut();
    });
  });

  var debugMode = false;
  if (debugMode) {
    var $openingAnimation = $('#openingAnimation');
    $openingAnimation.addClass('is-debug');
  } else {

    // 各sceneを定義
    var $openingAnimation = $('#openingAnimation'),
      $sceneClass = $('.scene'),
      $sceneOpening = $('#sceneOpening'),
      $sceneFirstBG = $('#sceneFirstBG'),
      $sceneOpeningText = $('#sceneOpeningText'),
      $scene02 = $('#scene02'),
      $scene02FirstBG = $('#scene02FirstBG'),
      $scene02FirstText = $('#scene02FirstText'),
      $scene02LastBG = $('#scene02LastBG'),
      $sceneEnd = $('#sceneEnd'),
      $sceneEndBG = $('#sceneEndBG'),
      $sceneEndText = $('#sceneEndText'),
      $remoteBtn = $('#remoteBtn');


    var masterTimeline = new TimelineMax();


    masterTimeline.set($sceneOpeningText, {
      opacity: "0"
    });

    masterTimeline.set($sceneOpening, {
      scale: '1.1'
    });

    function init() {
      masterTimeline.add(tl1Set(), 'part1');
      masterTimeline.add(endAnimation);
    }
    init();


    function tl1Set() {
      var tl1 = new TimelineMax();
      // scene01
      tl1.to($sceneOpeningText, 3, {
        opacity: "1",
        scale: '1',
        delay: 1,
        ease: Power2.easeOut
      }).to($sceneOpening, 1, {
        opacity: "0",
      })
        .to($scene02FirstBG, 8, {
          x: '-5%',
          delay: -1
        })
        .to($scene02LastBG, 4, {
          x: '-5%',
          delay: -2
        })
        .to($scene02FirstBG, .5, {
          opacity: "0",
          delay: -4
        })
        .to($scene02FirstText, 3, {
          opacity: "1",
          x: '0',
          ease: Power2.easeOut,
          delay: -8
        })
        .to($scene02, 2.5, {
          opacity: "0",
          delay: -1
        })
        .to($sceneEndBG, 8, {
          scale: '1.1',
          delay: -2
        })
        .to($sceneEndText, 2, {
          opacity: "1",
          ease: Power2.easeOut,
          delay: -7
        })
        .to($sceneEnd, 1, {
          opacity: "0",
          delay: -3
        });



      return tl1;
    }


    $remoteBtn.on('click', function () {
      $openingAnimation.addClass('is-end');;
      endAnimation();
    });

    function endAnimation() {
      $openingAnimation.addClass('is-end');
    };

    // modal
  }
