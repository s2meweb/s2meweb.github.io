// onepagescroll.js
// 메뉴 클릭시 원하는 곳으로 이동처리

(function(){
	var gnb = $('#gnb');
	var menu = gnb.find('li').find('a');
	var timed = 1000;
	
	menu.on('click', function(e){
		e.preventDefault();
		
		var $this = $(this.hash);		
		var scrollresult = $this.offset().top;
//		console.log(scrollresult);
		$('html,body').animate({scrollTop:scrollresult},timed);
	});
	
	// -------------------------------------
	var top = $('.top');
	top.on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0},timed);
	});
	
	// -------------------------------------
	var scrolldown = $('.scroll');
	scrolldown.on('click', function(e){
		e.preventDefault();
		var addBox = $(this).parent().siblings('#addBox');
		var boxoffset = addBox.offset().top;
		$('body,html').animate({scrollTop:boxoffset}, timed);
	});
	
	

})(this.jQuery);