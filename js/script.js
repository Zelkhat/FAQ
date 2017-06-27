/* window.onload */
$(function() {

	$('.quest').hover(
		function() {
			// hover
			$(this).css('color', '#B0628B');
		},
		function() {
			// not hover
			$(this).css('color', '');
		}
	).on('click', function() {

		// find opened answer and slideUp it
		if (ThereIsOpenAnsw()[0] !== $(this).next()[0]) {
			ThereIsOpenAnsw().slideToggle('slow');
		}
		
		// show() and hide answer
		$(this).next().slideToggle('slow');

		}
	);

	$('.quandaset').find('a').on('click', function() {
		var $attr = $(this).attr('href').slice(1);
		var $answ = $('#' + $attr).find('.answ');

		if (ThereIsOpenAnsw()[0] !== $answ[0]) {
			ThereIsOpenAnsw().slideToggle('slow');
		} else {
			return
		};

		$answ.slideToggle('slow');
		}
	);

	// return opened answers
	ThereIsOpenAnsw = function() {
		return $('div.answ[style*="display: block"]');
	};

});