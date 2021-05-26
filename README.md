# morsel

よく利用するJavaScriptのプラグインをまとめました

Here is a list of frequently used JavaScript plug-ins.

![screenshot](screenshot.png)

## rwdImageMaps

https://github.com/stowball/jQuery-rwdImageMaps

`<map>`タグをレスポンシブ対応させます

```html
<script src="common/js/jquery.rwdImageMaps.min.js"></script>
```

```javascript
$(function() {
  $('img[usemap]').rwdImageMaps();
});
```



## magnific-popup

https://dimsemenov.com/plugins/magnific-popup/

モーダルウインドウです、ifraneにも対応しています

```html
<link rel="stylesheet" type="text/css" href="common/css/magnific-popup.css" />
<script src="common/js/jquery.magnific-popup.min.js"></script>
```

```javascript
$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe', //iframeで表示
    // type: 'image', //画像で表示
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});
```



## bxslider

https://bxslider.com/

シンプルなjQueryを使ったスライダーです

```html
<link rel="stylesheet" type="text/css" media="all" href="common/bxslider/jquery.bxslider.css" />

<script type="text/javascript" src="common/bxslider/jquery.bxslider.min.js"></script>
```

```javascript
$(document).ready(function() {
  var obj = $('.bxslider').bxSlider({
    mode: "fade",
    auto: true,
    infiniteLoop: true,
    responsive: true,
    speed: 1000,
    captions: true,
    displaySlideQty: 1,
    pager: true,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 0,
    pause: 3000,

    onSlideAfter: function() {
      obj.startAuto();
    }
  });
});
```



## swiper

https://swiperjs.com/

jQueryを使用しないスライダーです

```html
<link rel="stylesheet" href="common/swiper/css/swiper.min.css">

<script src="common/swiper/js/swiper.min.js"></script>
```

```javascript
$(document).ready(function () {
  var sliderThumbnail = new Swiper('.slider-thumbnail', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var slider = new Swiper('.slider', {
    loop: true,
    speed: 2000,
    effect: 'fade',
    autoplay: {
      delay: 5000,
    },
    thumbs: {
      swiper: sliderThumbnail
    }
  });
});
```


## modal

シンプルなモーダルです

```html
<div id="modalArea" class="modalArea">

  <div id="modalBg" class="modalBg"></div>

  <div class="modalWrapper">
    <div id="closeModal" class="closeModal">×</div>
    <div class="modalContents">

    </div>
  </div>

</div>

<a href="javascript:void(0)" target="_blank" class="prov-cvBtn__link openModal">
  <img src="https://placehold.jp/20/999/fff/320x185.png?text=banner" alt="">
</a>
```



## tab change

シンプルなタブ切り替えです

```html
<div class="floorplan__view">

  <div class="floorplan__tab">
    <div class="floorplan__tabItem n01 is--active">tabA</div>
    <div class="floorplan__tabItem n02">tabB</div>
  </div>

  <div class="floorplan__viewImage">
    <div class="floorplan__viewImageItem01">
      <img src="https://placehold.jp/20/666/fff/880x600.png?text=contentsA" alt="">
    </div>
    <div class="floorplan__viewImageItem02">
      <img src="https://placehold.jp/20/c9bc7d/fff/880x600.png?text=contentsB" alt="">
    </div>
  </div>

</div>
```

```javascript
$(function () {
  $('.n02').on('click', function () {
    var index01 = $('.floorplan__viewImage').index(this);
    $('.floorplan__viewImageItem01').css('display', 'none');
    $('.floorplan__viewImageItem02').eq(index01).fadeIn("slow");
    $('.n01').removeClass("is--active");
    $(this).addClass("is--active");
  });
  $('.n01').on('click', function () {
    var index02 = $('.floorplan__viewImage.basic').index(this);
    $('.floorplan__viewImageItem02').css('display', 'none');
    $('.floorplan__viewImageItem01').eq(index02).fadeIn("slow");
    $('.n02').removeClass("is--active");
    $(this).addClass("is--active");
  });
});
```



## tab change2

シンプルなタブ切り替えです
要素の複製にも対応しています

```html
<div class="madoriBox__tab">
  <p class="madoriBox__tab--item is-selected">tabA</p>
  <p class="madoriBox__tab--item">tabB</p>
  <p class="madoriBox__tab--item">tabC</p>
</div>

<div class="madoriBox__content">
  <img class="madoriImage" src="https://placehold.jp/20/666/fff/880x600.png?text=contentsA" alt="">
  <img class="madoriImage" src="https://placehold.jp/20/c9bc7d/fff/880x600.png?text=contentsB" alt="">
  <img class="madoriImage" src="https://placehold.jp/20/e1afa7/fff/880x600.png?text=contentsC" alt="">
</div>
```

```javascript
$(function () {
  let tabs = $(".madoriBox__tab--item");
  $(".madoriBox__tab--item").on("click", function () {
    $(".is-selected").removeClass("is-selected");
    $(this).addClass("is-selected");
    var index = tabs.index(this);
    $(".madoriImage").css('display', 'none').eq(index).fadeIn("slow");
  })
})
```



## PrintArea

印刷の範囲を限定できます

```html
<div class="typeBox-wrap">
  <img src="https://placehold.jp/20/999/fff/600x800.png?text=contents1" alt="">
  <p class="printButton">
    <img src="https://placehold.jp/20/999/fff/240x70.png?text=btn1" alt="">
  </p>
</div>
<div class="typeBox-wrap">
  <img src="https://placehold.jp/20/555/fff/600x800.png?text=contents2" alt="">
  <p class="printButton">
    <img src="https://placehold.jp/20/555/fff/240x70.png?text=btn2" alt="">
  </p>
</div>
```

```javascript
$(function () {
  //個別印刷ボタンをクリックした時
  $('.printButton').on('click', function () {
    $(this).parents('.typeBox-wrap').addClass('print-on');
    $('.typeBox-wrap:not(.print-on)').addClass('print-off');
    window.print();
    //window.print()の実行後、「print-on」「print-off」を削除
    $('.typeBox-wrap').removeClass('print-on');
    $('.print-off').removeClass('print-off');
  });
});
```

