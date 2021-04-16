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
  active: function () {
    sessionStorage.fonts = true;
  }
};

(function () {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

//最初に実行グループ
$(window).load(function () {

  // modal
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
  }

});//最初に実行グループ