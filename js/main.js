$(document).ready(function() {

   var $tbsmenu = $('#menu');
   var $tbscontent = $('#tab-content');
    $('#mainbtn').on('click', function() {
    	$('.left-block').show(500);
    	$('.main-block').css('width', '60%');

    } );

    $('#close-left').on('click', function() {
    	$('.left-block').hide(500);
    	$('.main-block').css('width', '100%');
    });

    $.ajax( {
    	type: 'GET',
    	url: 'data/Tabs.json',
    	success: function(tabs) {
    		$.each(tabs, function(index, tab) {
    			$tbsmenu.append("<li><a>" + tab.title + "</a></li>");
    			$tbscontent.append("<div id='id"+index+"''>"+tab.content+"</div>");
    		});
    	},
    	error: function() {
    		alert('Error loading tabs');
    	}
    });


//     $.get("data/Tabs.json", function(data){
//     	console.log(data["tabs"]);
//     	$.each(data["tabs"], function(index, tab){
//     		$("#menu").append("<li><a>" + tab["title"] + "</a></li>");
//     		$(".tab-content").append("<div id='id"+index+"''>"+tab["content"]+"</div>");
//     	});
//     });
});