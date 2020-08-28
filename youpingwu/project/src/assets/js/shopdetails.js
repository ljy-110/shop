

	$('.bot-img').mouseover(function(){
	$(this).css('border','1px solid gray');
	$(this).siblings().css('border','');
	var index2 = $(this).index();
	console.log(index2);
	$(".show-max:eq("+index2+")").siblings('div').addClass('display');
	$(".show-max:eq("+index2+")").removeClass('display');
})
// export{
// 	mouseover
// }
