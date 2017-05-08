// booth.js
// booth 안내 슬라이드 배너만들기

(function($){
	var dessert = $('#dessert');
  var booth = $('#booth');
  var boothUl = booth.find('ul');
  var boothLi = boothUl.find('li');
  var liLast = boothLi.last();
	  boothUl.prepend(liLast);
	  boothUl.css({marginLeft: -33.333334 + '%'});
	var left = $('.left');
  var right = $('.right');
  var timed = 1000; 
	var ef = 'easeInSine'; 
	
	
	 left.on('click', function(){
		liLast = boothUl.find('li').last();
		boothUl.stop().animate({marginLeft:0}, timed, ef, function(){
			boothUl.prepend(liLast);
      boothUl.css({marginLeft: -33.333334 + '%'});
    });
  }); // left.on(click)
	
	
  var rotateAni = function(){
  var lifirst = boothUl.find('li').first();
  boothUl.stop().animate({marginLeft:-66.666667 +'%'}, timed, ef, function(){
    boothUl.append(lifirst);
    boothUl.css({marginLeft:-33.333334 + '%'});
    });
  } // rotateAni
  
  right.on('click', rotateAni); // right.on(click)
	
//  var play;
//  var auto = function(){
//    play = setInterval(rotateAni, timed*2);
//  }
// auto();
//  var clear = function(){
//    clearInterval(play);
//  }    
// 
//  booth.on({mouseenter:clear, mouseleave:auto});
})(this.jQuery);