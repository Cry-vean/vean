$('.listnav>li').click(function(){

$(this).addClass('current');
$(this).siblings().removeClass('current');
})


$('.btnenjoy').hover(function(){
        $(this).css('background','#f6b465');
        $(this).children('a').css('color','#fff');
},function(){
	 $(this).css('background','#fff');
	    $(this).children('a').css('color','red');
})

$('.box3 button').hover(function(){
        $(this).css('background','red');
        $(this).css('color','#fff');
},function(){
	 $(this).css('background','#fff');
	    $(this).css('color','#666');
})

$('.box5 button').hover(function(){
        $(this).css('background','red');
        $(this).css('color','#fff');
},function(){
	 $(this).css('background','#fff');
	    $(this).css('color','#666');
})

$('.box7 button').hover(function(){
        $(this).css('background','red');
        $(this).css('color','#fff');
},function(){
	 $(this).css('background','#fff');
	    $(this).css('color','#666');
})
$('.box10 button').hover(function(){
        $(this).css('background','red');
        $(this).css('color','#fff');
},function(){
	 $(this).css('background','#fff');
	    $(this).css('color','red');
})

new WOW().init();

$('.li1').click(function(){
	 if(!$('.li1 ul').is(":visible")){
	$('.li1 ul').show();
	}
	 else{
	 	$('.li1 ul').hide();
	 }
})

$('.li2').click(function(){
	 if(!$('.li2 ul').is(":visible")){
	$('.li2 ul').show();
	}
	 else{
	 	$('.li2 ul').hide();
	 }
})
$('.li3').click(function(){
	 if(!$('.li3 ul').is(":visible")){
	$('.li3 ul').show();
	}
	 else{
	 	$('.li3 ul').hide();
	 }
})
$('.li4').click(function(){
	 if(!$('.li4 ul').is(":visible")){
	$('.li4 ul').show();
	}
	 else{
	 	$('.li4 ul').hide();
	 }
})
$('.li5').click(function(){
	 if(!$('.li5 ul').is(":visible")){
	$('.li5 ul').show();
	}
	 else{
	 	$('.li5 ul').hide();
	 }
})
$('.li6').click(function(){
	 if(!$('.li6 ul').is(":visible")){
	$('.li6 ul').show();
	}
	 else{
	 	$('.li6 ul').hide();
	 }
})