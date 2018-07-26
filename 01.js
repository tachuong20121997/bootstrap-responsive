$(document).ready(function(){
	$(window).resize(function(){
		var docao = $(window).height();
		$('.top1').css({'height': docao});
	});

	$(".menuclick").click(function(){
		$('.menuphai').addClass("ra");
		return false;
	});

	$(".vao").click(function(){ 
		$('.menuphai').removeClass("ra");
		return false;
	});

	$("#home").click(function(){
		$('html,body').animate({scrollTop: $("#top1").offset().top},1000);
		return false;
	});

	$("#totop2").click(function(){
		$('html,body').animate({scrollTop: $("#top2").offset().top},1000);
		return false;
	});

	$("#about").click(function(){
		$('html,body').animate({scrollTop: $("#footer").offset().top},1000);
		return false;
	});

	$("#service").click(function(){
		$('html,body').animate({scrollTop: $("#top3").offset().top},1000);
		return false;
	});

	$("#portfolio").click(function(){
		$('html,body').animate({scrollTop: $("#top5").offset().top},1000);
		return false;
	});

	$("#contact").click(function(){
		$('html,body').animate({scrollTop: $("#top7").offset().top},1000);
		return false;
	});


})

