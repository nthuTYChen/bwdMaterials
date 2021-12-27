var oldScrollTop = 0;

window.onload = function() {
 	$(window).on('scroll', function() {
 		let scrollTop = $('html').scrollTop();
 		let windowHeight = $(window).height();
 		if(scrollTop > windowHeight * 0.15) {
 			$('div#backToTop').show(500);
 		}
 		else {
 			$('div#backToTop').hide(300);
 		}
 		let currentBgTop = $('img#bg').css('top');
 		if(scrollTop - oldScrollTop > 0) {
 			$('img#bg').css({'top': Number(currentBgTop.replace('px', '')) - 1 + 'px'});
 		}
 		else {
 			$('img#bg').css({'top': Number(currentBgTop.replace('px', '')) + 1 + 'px'});
 		}
 		oldScrollTop = scrollTop;
 	});

 	$('div#backToTop').on('click', function() {
 		$('html, body').animate({'scrollTop': 0}, 300);
 	});
};