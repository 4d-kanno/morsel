/**
 * Topic Footer Package.
 */
var tfp = {};
tfp.onArray = [ // 上が優先。
	{dir : '_template', index : null, layer : 1, next:'', back:''},
	{dir : 'concept', index : 1, layer : 1, next:'access', back:''},
	{dir : 'access', index : 2, layer : 1, next:'plan', back:'concept'},
  {dir : 'plan/pop/', index : 31, layer : 2, next:'design', back:'access'},
	{dir : 'plan/index.html', index : 3, layer : 1, next:'design', back:'access'},
	{dir : 'design', index : 4, layer : 1, next:'modelroom', back:'plan'},
	{dir : 'modelroom', index : 5, layer : 1, next:'equipment', back:''},
	{dir : 'equipment', index : 6, layer : 1, next:'security', back:''},
	{dir : 'security', index : 7, layer : 1, next:'map', back:''},
	{dir : 'map', index : 8, layer : 1, next:'outline', back:''},
	{dir : 'outline', index : 9, layer : 1, next:'', back:''}
];
tfp.onChoice = null;
tfp.init = function(){
	for(var i = 0; i < tfp.onArray.length; i++){
		if(tfp.onChoice == null){
			if(location.href.indexOf(tfp.onArray[i].dir) > -1) tfp.onChoice = tfp.onArray[i];
		}
	}
	if(tfp.onChoice == null) tfp.onChoice = {dir : '', index : 0, layer : 0};
	window.document.write(tfp.createTag());
};
tfp.createTag = function(){
	var result = '';
	var layer = '';
	var layerForTop = '';
	for(var i = 0; i < thp.onChoice.layer; i++){
			layer += '../';
	}

  result += '<footer id="footer" class="';
	if(tfp.onChoice.index == 0 || tfp.onChoice.index == 1 || tfp.onChoice.index == 2 || tfp.onChoice.index == 3 || tfp.onChoice.index == 4 || tfp.onChoice.index == 5 || tfp.onChoice.index == 6 || tfp.onChoice.index == 7 || tfp.onChoice.index == 9) {
    result += 'normal';
  }
  result += '">';
  result += '<div class="cvArea">';
  result += '<div class="inner">';
  result += '<p class="title">Contact</p>';
  result += '<div class="cv">';
  result += '<div class="req">';
  result += '<p>最新の情報をいち早くお届けします</p>';
  result += '<a href=""><span>資料請求</span></a>';
  result += '</div>';
  result += '<div class="res">';
  result += '<p>ご来場のご予約はこちらから</p>';
  result += '<a href=""><span>来場予約</span></a>';
  result += '</div>';
  result += '</div>';
  result += '</div>';
  result += '</div>';
  result += '<div class="fNavArea">';
  if(tfp.onChoice.index == 0 || tfp.onChoice.index == 1 || tfp.onChoice.index == 2 || tfp.onChoice.index == 3 || tfp.onChoice.index == 4 || tfp.onChoice.index == 5 || tfp.onChoice.index == 6 || tfp.onChoice.index == 7 || tfp.onChoice.index == 9) {
    result += '<div class="inner">';
    result += '<div class="fNavList">';
    result += '<ul>';
    result += '<li><a href="' + layer + '" class=" ';
  	if(tfp.onChoice.index == 0) {
  		result += 'on';
  	}
  	result += '"><span>トップ</span></a></li>';
    result += '<li><a href="' + layer + 'concept/" class=" ';
  	if(tfp.onChoice.index == 1) {
  		result += 'on';
  	}
  	result += '"><span>コンセプト</span></a></li>';
    result += '<li><a href="' + layer + 'access/" class=" ';
  	if(tfp.onChoice.index == 2) {
  		result += 'on';
  	}
  	result += '"><span>アクセス・ロケーション</span></a></li>';
    result += '<li><a href="' + layer + 'plan/" class=" ';
  	if(tfp.onChoice.index == 3) {
  		result += 'on';
  	}
  	result += '"><span>間取り</span></a></li>';
    result += '<li><a href="' + layer + 'design/" class=" ';
  	if(tfp.onChoice.index == 4) {
  		result += 'on';
  	}
  	result += '"><span>外観・共用部</span></a></li>';
    result += '<li><a href="' + layer + 'modelroom/" class=" ';
  	if(tfp.onChoice.index == 5) {
  		result += 'on';
  	}
  	result += '"><span>モデルルーム</span></a></li>';
    result += '<li><a href="' + layer + 'equipment/" class=" ';
  	if(tfp.onChoice.index == 6) {
  		result += 'on';
  	}
  	result += '"><span>設備・仕様</span></a></li>';
    result += '<li><a href="' + layer + 'structure/" class=" ';
  	if(tfp.onChoice.index == 7) {
  		result += 'on';
  	}
  	result += '"><span>構造・セキュリティ</span></a></li>';
    result += '<li class="spMenu map"><a href="' + layer + 'map/" class="popup ';
  	if(tfp.onChoice.index == 8) {
  		result += 'on';
  	}
  	result += '"><span>現地・マンション<br>ギャラリー案内図</span></a></li>';
    result += '<li class="spMenu outline"><a href="' + layer + 'outline/" class=" ';
  	if(tfp.onChoice.index == 9) {
  		result += 'on';
  	}
  	result += '"><span>物件概要</span></a></li>';
    result += '</ul>';
    result += '</div>';
  }
  result += '</div>';
  result += '</div>';
  result += '<div class="fInfoArea">';
  result += '<div class="fInfo">';
  result += '<p class="text01">お問い合わせは<br>○○○○○マンションギャラリー</p>';
  result += '<div class="tel">';
  result += '<a href="tel:0120-000-000">';
  result += '<img src="' + layer + 'common/imgs/ftr_tel.png" alt="フリーダイヤル0800-000-0000" width="286.5">';
  result += '</a>';
  result += '</div>';
  result += '<p class="text02">営業時間/午前10時〜午後6時（水曜定休）<br>携帯電話・PHSからもご利用いただけます。</p>';
  result += '</div>';
  result += '</div>';
	result += '<div class="fLogo">';
	result += '<ul>';
	result += '<li>';
	result += '<p>事業主（売主）</p>';
	result += '<a href="#" target="_blank"><img src="' + layer + 'common/imgs/ftr_logo01.png" alt="logo"></a>';
	result += '</li>';
	result += '<li>';
	result += '<p>事業主（売主）</p>';
	result += '<a href="#" target="_blank"><img src="' + layer + 'common/imgs/ftr_logo01.png" alt="logo"></a>';
	result += '</li>';
	result += '<li>';
	result += '<p>事業主（売主）</p>';
	result += '<a href="#" target="_blank"><img src="' + layer + 'common/imgs/ftr_logo01.png" alt="logo"></a>';
	result += '</li>';
  result += '</ul>';
	result += '</div>';

  result += '<nav class="fNav">';
	result += '<div class="inner">';
  result += '<ul>';
  result += '<li><a href="#" target="_blank">リンク1</a></li>';
  result += '<li><a href="#" target="_blank">リンク2</a></li>';
  result += '<li><a href="#" target="_blank">リンク3</a></li>';
  result += '<li><a href="#" target="_blank" class="">リンク4</a></li>';
  result += '</ul>';
	result += '</div>';
  result += '</nav>';

	result += '<div class="fCopy">';
	result += '<div class="inner">';
	result += '<p class="copyright">&copy;2019 *** inc.</p>';
	result += '</div>';
	result += '</div>';

  result += '</footer>';

	result += '<div class="sp_fNav">';
	result += '<ul>';
	result += '<li class="outline"><a href="" target="_blank"><span class="icon"><img src="' + layer + 'common/imgs/sp_fnav_01.png" width="25.5" alt=""></span><span class="text">物件概要</span></a></li>';
	result += '<li class="map"><a href="" target="_blank"><span class="icon"><img src="' + layer + 'common/imgs/sp_fnav_02.png" width="25.5" alt=""></span><span class="text">現地案内図</span></a></li>';
	result += '<li class="req"><a href="" target="_blank"><span class="icon"><img src="' + layer + 'common/imgs/sp_fnav_03.png" width="25.5" alt=""></span><span class="text">資料請求</span></a></li>';
	result += '<li class="res"><a href="" target="_blank"><span class="icon"><img src="' + layer + 'common/imgs/sp_fnav_04.png" width="25.5" alt=""></span><span class="text">来場予約</span></a></li>';
	result += '</ul>';
	result += '</div>';

	result += '<div class="pagetop"><a href="#"><img src="common/imgs/btn_pagetop.png" alt="pagetop"></a></div>';

	return result;
};
tfp.init();
