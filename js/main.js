$( document ).ready(function() {

	$('#oNamaBtn').click(function(){
		$('html,body').animate({
			scrollTop: $('#scroll-to-o-nama').offset().top
		},1000);

	$('#uslugeBtn').click(function(){
		$('html,body').animate({
			scrollTop: $('#scroll-to-usluge').offset().top
		},1000);
	});

	$('#aboutBtn').click(function(){
		$('html,body').animate({
			scrollTop: $('#ScrollToAbout').offset().top
		}, 1000);
	});


	$('#formaBtn').click(function(){
		$('#formaHide').fadeToggle(1000);
	});

});