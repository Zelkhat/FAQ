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

		var $answ = $(this).next();
		
		// find opened(:visible) answer and slideUp it
		$('.faqItem .answ:visible').not($answ).slideUp('slow');
		// show() and hide current answer
		$answ.stop(true, true).slideToggle('slow');
		}
	);

	// sliding-down answers using quandaset
	$('.quandaset').find('a').on('click', function() {
		
		var $attr = $(this).attr('href');
		var $answ = $($attr).find('.answ');
		
		$('.faqItem .answ:visible').not($answ).slideUp('slow');
		$answ.stop(true, true).slideToggle('slow');
		}
	);

});

// return opened answers - I
	//$('div.answ[style*="display: block"]')...
// return opened answers - II
	//var $answ = $(this).next();		
	//$('.faqItem .answ:visible').not($answ)...