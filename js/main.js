$(document).ready(function() {

   
    // $( "#tabs" ).tabs();
    $('#mainbtn').on('click', function() {
    	$('.left-block').show(500);
    	$('.main-block').css('width', '60%');

    } );

    $('#close-left').on('click', function() {
    	$('.left-block').hide(500);
    	$('.main-block').css('width', '100%');
    });

});