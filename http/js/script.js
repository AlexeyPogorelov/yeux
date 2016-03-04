$(function(){
	$('section.full').height($(window).height());
	$(window).resize(function(){
		$('section.full').height($(window).height());
	});
});
// $(document).ready(function() {
//     $('#fullpage').fullpage();
// });