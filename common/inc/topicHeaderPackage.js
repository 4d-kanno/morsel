/**
 * 共通化nav情報
 */
var incNav = incNav || {};
incNav.onArray = [ // 上が優先。
	{dir : '_template', index : null, layer : 1, new : false, off: false, next : '', back : ''},
	{dir : 'concept', index : 1, layer : 1, new : false, off: false, next : '', back : ''},
	{dir : 'access', index : 2, layer : 1, new : false, off: false, next : '', back : ''},
  {dir : 'plan/pop', index : 31, layer : 2, new : false, off: false, next : '', back : ''},
	{dir : 'plan/index.html', index : 3, layer : 1, new : false, off: false, next : '', back : ''},
	{dir : 'design', index : 4, layer : 1, new : false, off: false, next : '', back : ''},
	{dir : 'modelroom', index : 5, layer : 1, new : false, off: false, next : '', back : ''},
	{dir : 'equipment', index : 6, layer : 1, new : false, off: false, next : '', back : ''},
	{dir : 'security', index : 7, layer : 1, new : false, off: false, next : '', back : ''},
	{dir : 'map', index : 8, layer : 1, new : false, off: false, next : '', back : ''},
	{dir : 'outline', index : 9, layer : 1, new : false, off: false, next : '', back : ''}
];


/**
 * Topic Header Package.
 */
var thp = {};
thp.onChoice = null;
thp.onArray = {};
thp.init = function(){
	for(var i = 0; i < incNav.onArray.length; i++){
		if(thp.onChoice == null){
			if(location.href.indexOf(incNav.onArray[i].dir) > -1) thp.onChoice = incNav.onArray[i];
		}
		thp.onArray[incNav.onArray[i].dir] = incNav.onArray[i];
	}
	if(thp.onChoice == null) thp.onChoice = {dir : '', index : 0, layer : 0, next : '', back : ''};
	window.document.write(thp.createTag());
};
thp.createTag = function(){
	var result = '';
	var layer = '';
	for(var i = 0; i < thp.onChoice.layer; i++){
		layer += '../';
	}

	// href="' + layer + ' // パス（../）の変数
	// if(thp.onChoice.index == 1) result += 'on '; それぞれ固有の処理をさせたい時（番号はindexに基づく
	// if(thp.onArray._template.new) result += 'new '; NEWマーク
	// if(thp.onArray._template.off) result += 'off '; off処理


  result += '<header id="header" class="';
	if(thp.onChoice.index == 0 || thp.onChoice.index == 1 || thp.onChoice.index == 2 || thp.onChoice.index == 3 || thp.onChoice.index == 4 || thp.onChoice.index == 5 || thp.onChoice.index == 6 || thp.onChoice.index == 7 || thp.onChoice.index == 9) {
		result += 'normal';
	}
  result += '">';
	result += '<div class="logo">';
	result += '<h1>';
	result += '<img src="' + layer + 'common/imgs/hdr_logo.png" width="90" alt="LOGO" class="pc_head">';
	result += '<img src="' + layer + 'common/imgs/hdr_logo_sp.png" width="135" alt="LOGO" class="sp_head">';
	result += '</h1>';
	result += '</div>';
  result += '<div class="pNav">';
  if(thp.onChoice.index == 0 || thp.onChoice.index == 1 || thp.onChoice.index == 2 || thp.onChoice.index == 3 || thp.onChoice.index == 4 || thp.onChoice.index == 5 || thp.onChoice.index == 6 || thp.onChoice.index == 7 || thp.onChoice.index == 9) {
    result += '<div class="textLink">';
    result += '<div class="map"><a href="' + layer + 'map/" class="popup"><span>現地・マンションギャラリー案内図</span></a></div>';
    result += '<div class="outline"><a href="' + layer + 'outline/"><span>物件概要</span></a></div>';
    result += '</div>';
  }
  result += '<div class="cv">';
  result += '<div class="req"><a href="" target="_blank"><span>資料請求</span></a></div>';
  result += '<div class="res"><a href="" target="_blank"><span>来場予約</span></a></div>';
  result += '</div>';
  result += '</div>';
  result += '<div class="sp_menu_btn">';
  result += '<div class="sp_menu_btn_phone">';
  result += '<a href="tel:00-000-0000">';
  result += '<span><img src="' + layer + 'common/imgs/hdr_sp_btn_phone.png" width="60" alt="phone"></span>';
  result += '</a>';
  result += '</div>';
  result += '<div class="sp_menu_btn_menu">';
  result += '<span class="df"><img src="' + layer + 'common/imgs/hdr_sp_btn_menu.png" alt="menu" width="60"></span>';
  result += '<span class="ov"><img src="' + layer + 'common/imgs/hdr_sp_btn_menu_ov.png" alt="close" width="60"></span>';
  result += '</div>';
  result += '</div>';
  result += '</header>';
  result += '<nav id="gNav" class="';
	if(thp.onChoice.index == 0 || thp.onChoice.index == 1 || thp.onChoice.index == 2 || thp.onChoice.index == 3 || thp.onChoice.index == 4 || thp.onChoice.index == 5 || thp.onChoice.index == 6 || thp.onChoice.index == 7 || thp.onChoice.index == 9) {
		result += 'normal';
	}
  result += '">';
  result += '<ul>';
  if(thp.onChoice.index == 0 || thp.onChoice.index == 1 || thp.onChoice.index == 2 || thp.onChoice.index == 3 || thp.onChoice.index == 4 || thp.onChoice.index == 5 || thp.onChoice.index == 6 || thp.onChoice.index == 7 || thp.onChoice.index == 9) {
    result += '<li><a href="' + layer + '" class=" ';
  	if(thp.onChoice.index == 0) {
  		result += 'on';
  	}
    result += '"><span>トップ</span></a></li>';
    result += '<li><a href="' + layer + 'concept/" class=" ';
  	if(thp.onChoice.index == 1) {
  		result += 'on';
  	}
    result += '"><span>コンセプト</span></a></li>';
    result += '<li><a href="' + layer + 'location/" class=" ';
  	if(thp.onChoice.index == 2) {
  		result += 'on';
  	}
    result += '"><span>アクセス・ロケーション</span></a></li>';
    result += '<li><a href="' + layer + 'plan/" class=" ';
  	if(thp.onChoice.index == 3) {
  		result += 'on';
  	}
    result += '"><span>間取り</span></a></li>';
    result += '<li><a href="' + layer + 'design/" class=" ';
  	if(thp.onChoice.index == 4) {
  		result += 'on';
  	}
    result += '"><span>外観・共用部</span></a></li>';
    result += '<li><a href="' + layer + 'modelroom/" class=" ';
  	if(thp.onChoice.index == 5) {
  		result += 'on';
  	}
    result += '"><span>モデルルーム</span></a></li>';
    result += '<li><a href="' + layer + 'equipment/" class=" ';
  	if(thp.onChoice.index == 6) {
  		result += 'on';
  	}
    result += '"><span>設備・仕様</span></a></li>';
    result += '<li><a href="' + layer + 'structure/" class=" ';
  	if(thp.onChoice.index == 7) {
  		result += 'on';
  	}
    result += '"><span>構造・セキュリティ</span></a></li>';
    result += '<li class="spMenu map"><a href="' + layer + 'map/" class="popup ';
  	if(thp.onChoice.index == 8) {
  		result += 'on';
  	}
    result += '"><span>現地・マンション<br>ギャラリー案内図</span></a></li>';
    result += '<li class="spMenu outline"><a href="' + layer + 'outline/" class=" ';
  	if(thp.onChoice.index == 9) {
  		result += 'on';
  	}
    result += '"><span>物件概要</span></a></li>';
  }
  result += '<li class="spMenu req"><a href="" target="_blank"><span>資料請求</span></a></li>';
  result += '<li class="spMenu res"><a href="" target="_blank"><span>来場予約</span></a></li>';
  result += '<li class="close"><img src="' + layer + 'common/imgs/gnav_close.png" width="19" alt=""></li>';
  result += '</ul>';
  result += '</nav>';

	return result;
};
thp.init();
