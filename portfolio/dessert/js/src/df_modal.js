  //modal.js

(function($){

  var lnb = $('#lnb');
  var lnbBtn = lnb.find('#lnbbtn').find('li');
	var lnbl = lnbBtn.children().last();
  var mBox = $('.modal');
	var lastM = mBox.children().last();
  
  lnbBtn.on('click', function(e){
    
    e.preventDefault();
    
    var btnLi = $(this).index();

    mBox.fadeIn();
    
    mBox.find('div').eq(btnLi).fadeIn();
  
 
  mBox.find('div').prepend('<button type="button" class="mClose">닫기</button>');
  $('.mClose').css({width:'3.5em', height:'3.5em', backgroundColor:'#8accbc',
                   position:'absolute', top:'0.2em', right:'0.2em', zIndex:500,
                   color:'#fff', borderRadius:'100%', fontWeight:'bold'});
  
  var mClose = $('.mClose');
  mClose.on('click', function(e){
    e.preventDefault();
    mBox.find('div').find('.mClose').remove();
    mBox.find('div').hide();
    mBox.hide();
  });
  });

	lnbl.on('click', function(e){
	e.preventDefault();
		
		
		var $this = $(this.hash);
		var scrollre = $this.offset().top;
		
		
		
		$('html,body').animate({scrollTop:scrollre});
	});



	// Frequently Asked Question
	var article = $('.notice>.notiBody>.article');
	article.addClass('hide');
	article.find('.a').hide();
	article.eq(0).removeClass('hide');
	article.eq(0).find('.a').show();
	$('.notice>.notiBody>.article>.q>a').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show');
			article.find('.a').slideUp(100);
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.a').slideUp(100);
		}
		return false;
	});
	$('.notice>.notiHeader>.showAll').click(function(){
		var hidden = $('.notice>.notiBody>.article.hide').length;
		if(hidden > 0){
			article.removeClass('hide').addClass('show');
			article.find('.a').slideDown(100);
		} else {
			article.removeClass('show').addClass('hide');
			article.find('.a').slideUp(100);
		}
	});

	
		})(this.jQuery);