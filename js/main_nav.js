//main_ani.js

(function ($) {

	var gnb = $('#gnb');
	var gnbA = gnb.find('li').find('a');
	var timed = 1000;
      
      gnbA.on('click', function(e){
        e.preventDefault(); 
        
				var $this = $(this.hash);		
				var scrollresult = $this.offset().top;

		$('html,body').animate({scrollTop: scrollresult}, timed);
	});
  
	
	var menu = $('.menu');
	menu.hide();
	gnbA.on('mouseenter',function(){
		menu.show();
	}).on('mouseleave',function(){
		menu.hide();
	});

})(this.jQuery);

