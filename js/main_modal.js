//main_modal.js

(function($){
	
	var resume = $('.resume');
	var rebtn = resume.find('.rebtn').find('.btn');
	var moBox = $('.myresume').find('a');
	
	rebtn.on('click', function(e){
		
		e.preventDefault();
		
		var mobtn = $(this).index();

    moBox.fadeIn();
   
    moBox.eq(mobtn).fadeIn();
		
		moBox.prepend('<button type="button" class="close">닫기</button>');
  	$('.close').css({width:'3.5em', height:'3.5em', backgroundColor:'#777',
                   position:'absolute', top:'0.2em', right:'0.2em', zIndex:500,
                   color:'#fff', borderRadius:'100%', fontWeight:'bold'});
  
  var close = $('.close');
 	Close.on('click', function(e){
    e.preventDefault();
    moBox.find('div').find('.close').remove();
    moBox.find('div').hide();
    moBox.hide();
	});
	
	});
	
})(this.jQuery);