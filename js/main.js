/*main.js*/
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
      
      
      var d = false;  
      
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
      // 1. 아래로 휠을 올렸을때 화면이동         
      // $('html body').stop().animate({scrollTop:scrollT -= viewH}, 1000);
        
        if(scrollT <= 0){
        // 1-1: scrollTop높이가 0작으면 무조건 scrollTop은 0
            $(window).scrollTop(0);
           }else{
        // 1-2: 0보다 큰상태일때는 작동(스크롤)!
            $('html, body')
              .stop()
              .animate({scrollTop:scrollT -= viewH}, 
                       1000, 
                       function(){d = false});
           }// scroll높이0일경우판단 종료
          
        
         }else if(me < 0 && !d){
           d = true;
      // 2. 위로 휠을 내렸을때 화면이동
      // $('html body').stop().animate({scrollTop:scrollT += viewH}, 1000);
           
           var browserFullH = viewH * 3; //브라우저 전체 높이값 계산(5개이기에 '*4' 처리)
           if(scrollT >= browserFullH){
           // 2-1: scroll높이를 전체 브라우저의 높이값을 판단해서 처리
               $(window).scrollTop(browserFullH);
            }else{
           // 2-2: 이외의 기능은 기존 계산식을 사용
             $('html, body').stop().animate({scrollTop:scrollT += viewH}, 1000,function(){d= false});
              
              
            }// else  
           
         }// 마우스 전체 휠(else)
       
      
    }  // mouseWheel(e)     
      
      
      
      // wrap 내부의 div 갯수파악 방법
      var wrapLength = $('#wrap').children('.view').length; 
//      console.log( wrapLength );
    })(this.jQuery);