//dessertfair.js

(function($){
      var gnbLi = $('#gnb').find('li');
      var viewH = $('html,body').height(); //브라우저의 높이값
      var scrollT = $(window).scrollTop();
//      console.log(viewH);

      gnbLi.on('click', function(evt){
        evt.preventDefault(); 
        var $this = $(this);  
        var thisIndex = $this.index(); 
      $('html, body').animate({scrollTop: thisIndex * viewH},1000,'easeIn');
    }); // gnbLi.onclick 

      
//      var d = false;
      
    $('body').on('mousewheel DOMMouseScroll', mouseWheel);
      
    function mouseWheel(e){
      var mouseEvent = e.originalEvent;
      var me = 0;
      var winscroll = $('html,body').scrollTop();
      if(mouseEvent.detail){
        me = mouseEvent.detail * 40;
      }else{
        me = mouseEvent.wheelDelta;
      }
      if(me >= 0 && !d){
        d = true;
 			if(scrollT <= 0){
            $(window).scrollTop(0);
           }else{

            $('html, body')
              .stop()
              .animate({scrollTop:scrollT -= viewH}, 
                       1000, 
                       function(){d = false});
           }
          
        
         }else if(me < 0 && !d){
           d = true;
      
           
           var browserFullH = viewH * 4;
           if(scrollT >= browserFullH){

               $(window).scrollTop(browserFullH);
            }else{

             $('html, body').stop().animate({scrollTop:scrollT += viewH}, 1000,function(){d= false});
              
              
            }// else  
           
         }// 마우스 전체 휠(else)
       
      
    }  // mouseWheel(e)     
      
      // wrap 내부의 div 갯수파악 방법
      var wrapLength = $('#wrap').children('.view').length; 
//      console.log( wrapLength );

		
	/*
	// ---------------------------------------
	var dessert = $('#dessert');
  var booth = $('#booth');
  var boothUl = booth.find('ul');
  var boothLi = boothUl.find('li');
  var liLast = boothLi.last();
	  boothUl.prepend(liLast);
	  boothUl.css({marginLeft: -33.333333 + '%'});
	var left = $('.left');
  var right = $('.right');
  var timed = 1000; 
	var ef = 'easeIn'; 
	  left.on('click', function(){
		liLast = boothUl.find('li').last();
		boothUl.stop().animate({marginLeft:0}, timed, ef, function(){
						     boothUl.prepend(liLast);
      boothUl.css({marginLeft:-100 + '%'});
    });
  }); // left.on(click)
  var rotateAni = function(){
  var lifirst = boothUl.find('li').first();
  boothUl.stop().animate({marginLeft:-33.333333 +'%'}, timed, ef, function(){
    boothUl.append(lifirst);
    boothUl.css({marginLeft:0 + '%'});
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
//  
*/
})(this.jQuery);
