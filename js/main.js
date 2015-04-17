$(document).ready(function() {

	var time = 500;

	$('#mainbtn').on('click', function() {
   		$('.left-block').animate({width: "show"}, 600);
    	$('.main-block').animate({width:"60%"}, 500);
    });

    $('#close-left').on('click', function() {
   		$('.left-block').animate({width: "hide"}, 500);
    	$('.main-block').animate({width:"100%"}, 900);
    });

    var $tbsmenu = $('.menu');
   	var $tbscontent = $('#tab-content');
   	var $index_val = $('#index-value');
   	var $title_val = $('#title-value');
   	var $content_val = $('#content-value');

   	function addTab (tab) {
   		$tbsmenu.append('<li><a data-id = '+ tab.index +'>' + tab.title + '</a></li>');
    	$tbscontent.append('<div id="id'+tab.index+'">' + tab.content + '</div>');
   	};

    $.ajax( {
    	type: 'GET',
    	url: 'data/Tabs.json',
    	success: function(tabs) {
    		$.each(tabs, function(index, tab) {
    			addTab(tab);
    		});
    		console.log(tabs);
    		 $('.menu li a').on('dblclick', function() {
				console.log("click");
				id = $(this).data("id");
				$('.left-block').show(time);
				$index_val.val(id);
				$title_val.val($(this).html());
				$content_val.val($("#id"+id).html());
    			$('.main-block').css('width', '60%');
			});
    	},
    	error: function() {
    		alert('Error loading tabs');
    	}
    });

    $('#addbtn').on('click', function(){
    	var new_tab = {
    		title: $title_val.val(),
    		content: $content_val.val()
    	};

    	console.log(new_tab);

    	$.ajax( {
    		type: 'POST',
    		url: 'data/Tabs.json',
    		data: JSON.stringify(new_tab),
    		success: function(newTab) {
    			addTab(newTab);
    		},
    		error: function() {
    			alert('Error while saving new tab');
    		}
    	});
	});

	





   
//     $.get("data/Tabs.json", function(data){
//     	console.log(data["tabs"]);
//     	$.each(data["tabs"], function(index, tab){
//     		$("#menu").append("<li><a>" + tab["title"] + "</a></li>");
//     		$(".tab-content").append("<div id='id"+index+"''>"+tab["content"]+"</div>");
//     	});
//     });
});

