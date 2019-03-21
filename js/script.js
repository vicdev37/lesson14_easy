$(document).ready(function() {
	$('.main_btna').on('click', function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	});

	$('.close').on('click', function () {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	});
});

