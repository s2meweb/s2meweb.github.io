//main_modal.js

(function($){
	
	var about = $('#about');
	var resume = about.find('.rebtn').find('button');
	var moBox = $('.myresume');
	
	resume.on('click', function(e){
		
		e.preventDefault();
		
		moBox.fadeIn();
		
		moBox.find('div').hide();
		
	})
	
})(this.jQuery);