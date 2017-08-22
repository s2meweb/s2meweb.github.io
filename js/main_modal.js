//main_modal.js

(function($){
	
	var rebtn = $('.rebtn');
	var mbtn = rebtn.find('.btn');
	var moBox = $('.myresume');
//	var img = moBox.attr("../resume.jpg")
	
	mbtn.addClass('active');
	moBox.addClass('active_box');
		
	mbtn.on('click', function(e){
		e.preventDefault();
		
		var $this = $(this);
		
		mbtn.removeClass('active');
		mbtn.addClass('active');
		
		moBox.removeClass('active_box');
		moBox.addClass('active_box');
		
		


	
   	moBox.prepend('<button type="button" class="close">닫기</button>');
  	$('.close').css({width:'3.5em', height:'3.5em', backgroundColor:'#777',
                   position:'absolute' , top:'0.2em', right:'90%', zIndex:500,
                   color:'#fff', borderRadius:'100%', fontWeight:'bold'});
  
  var close = $('.close');
 	close.on('click', function(e){
    e.preventDefault();
    moBox.find('.close').remove();
    moBox.hide();
	});
		
	});
	
	//---------------resume_modal---------------------
	
	
			var tabLi = $('.list').find('li');
      var tabInDl = $('.tab_box').children('dl');
      
      tabLi.eq(0).addClass('active');
      tabInDl.eq(0).addClass('active_box');
      
      tabLi.on('click', function(e){
        e.preventDefault();
        
        var $this = $(this); 
        var indexLi = $this.index(); 
        console.log(indexLi);
        
        tabLi.removeClass('active'); 
        $this.addClass('active'); 
        
        
         tabInDl.removeClass('active_box'); 
        
         tabInDl.eq(indexLi).addClass('active_box');
        
      });
	
	//---------------tab_box------------------------------
	
})(this.jQuery);