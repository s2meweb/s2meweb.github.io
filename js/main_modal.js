//main_modal.js

(function($){
	
	var rebtn = $('.rebtn');
	var mbtn = rebtn.find('li');
	var moBox = $('.myresume');
	
  mbtn.on('click', function(e){
    // a의 기본 이벤트 제거
    e.preventDefault();
    // 클릭한 li의 순서 확인
    // .eq() : 몇번째 선택  ,    .index() : 몇번째인지 확인
    var btnLi = $(this).index();
//    console.log(btnLi);  // 순서확인
    // .modal 나타나기(배경 어둡게)
    moBox.fadeIn();
    // .modal>div 순서에 맞는것을 나타나게하기
    moBox.find(HTMLImageElement).eq(btnLi).fadeIn();
		
		moBox.prepend('<button type="button" class="close">닫기</button>');
  	$('.close').css({width:'3.5em', height:'3.5em', backgroundColor:'#777',
                   position:'absolute' , top:'0.2em', right:'0.2em', zIndex:500,
                   color:'#fff', borderRadius:'100%', fontWeight:'bold'});
  
  var close = $('.close');
 	close.on('click', function(e){
    e.preventDefault();
    moBox.find('.close').remove();
    moBox.hide();
	});
	
});
	
})(this.jQuery);