$('.list1>li').click(function(){
	var index=$(this).index();
    $('.box2>.container').children('div').eq(index).addClass('one');
	$('.box2>.container').children('div').eq(index).siblings().removeClass('one');

})

$('.list2>li').click(function(){
	$(this).addClass('two');
	$(this).siblings().removeClass('two')
})
$('.box3 button').hover(function(){
        $(this).css('background','red');
        $(this).css('color','#fff');
},function(){
	 $(this).css('background','#fff');
	    $(this).css('color','red');
})

new WOW().init();