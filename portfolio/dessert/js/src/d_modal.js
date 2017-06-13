//d_modal_01.js


COMM.validate = function() {
    var items = $('.mandatory');
    var messages = '', isValid = true;
    for (var inx=0; inx<items.length; inx++) {
        if ($(items[inx]).val() == '') {
            isValid = false;
            messages += $(items[inx]).attr('data') + '은(는) 필수 입력값입니다.\n';
            break;
        }
    }
     
    return {valid: isValid, messages: messages};
};


var WRITER = {};
 
var WRITER.write = function() {
    var validator = COMM.validate();
    if (!validator.valid) {
        alert(validator.messages);
        return;
    }
};
 
$(document).ready(function() {
    $('#btnWrite').on('click', function() {
        WRITER.write();
    });
});


COMM.doPost = function(url, input, success, fail) {
    var option = {};
    option.url = url + '?__jsonParams=' + JSON.stringify(input);
    option.type = 'POST';
    option.headers = {'Content-Type': 'application/json'};
    option.success = function(data) {
        try {
            if (typeof data == 'string') data = JSON.parse(data);
            success(data);
        } catch (e) {
            if (fail && typeof fail == 'function') {
                fail(e);
            } else {
                alert(e.stack);
            }
        }
    };
    option.error = function(jqXHR, status, error) {
        if (fail && typeof fail == 'function') {
            fail(error);
        } else {
            alert(error);
        }
    };
    $.ajax(option);
};



(function($){
 
  var head = $('#headBox');
  var headHeight = head.height();

  var headPaddingTop = parseInt(head.css('paddingTop'));
  var headPaddingBtm = parseInt(head.css('paddingBottom'));

  function Base(){ 
    $('#wrap').css({paddingTop:headHeight + headPaddingTop + headPaddingBtm});
  } 
  Base();
  // modal -------------------------------------------------------------------
  
		var lnb = head.find('#naviBox').find('#lnb');
		
  	var lnbn = lnb.find('.noti');
		var lnbf = lnb.find('.fq');
  	var mBox = $('.modal');
  
	lnbn.on('click', function(e){
		e.preventDefault();
		
		var mBoxLi = mbox.children('li')
		var firM = mBoxLi.first();
		
 		mBox.fadeIn();
		mBox.find('firM').fadeIn();
  
   //닫기 버튼 생성
 mBox.find('div').prepend('<button type="button" class="mClose">닫기</button>');
  $('.mClose').css({width:'3.5em', height:'3.5em', backgroundColor:'#245',
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



  
	})(this.jQuery);
