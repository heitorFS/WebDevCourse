$(document).ready(function () {
    let buttons = $('.buttons');
    $('.menu-button').on('click', function() {
        if (buttons.is(':visible')) {
            buttons.slideUp();
            return;
        }
        
        buttons.slideDown({
            start: function() {
              $(this).css('display','grid');
            }
        });
    });

    $(window).resize(function() {		
		if (  $(window).width() > 750 ) {			
			buttons.removeAttr('style');
		 }
	});
    
    var lastRelative = true
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > $('header').height() && lastRelative) {
            $('header').css({ 'position': 'fixed' });
            lastRelative = false
        }
        else if (scroll <= $('header').height() && !lastRelative) {
            $('header').css({ 'position': 'relative' });
            lastRelative = true
        }
    });
})