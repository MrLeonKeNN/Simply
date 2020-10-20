// let element = document.getElementById('menu');
// $(document).ready(function() {
// 	 $('.checkbox1').click(function(event){
// 		 $('.burger__menu1').toggleClass('burger__menu__off');
// 		 $('body').toggleClass('lock');
	
// 	 });
//  });
//  $('.checkbox1').click(function(event) {
// 	$('.burger__menu1').removeClass('active');
// 	$('body').removeClass('.lock');
// })

function burger(){
	let elBody = document.getElementById('body');
	let element = document.getElementById('menu');
	if(element.classList.contains('burger__menu__off')){
		element.classList.remove('burger__menu__off');
		 elBody.classList.remove('lock');
		 
	}else{
		element.classList.add('burger__menu__off');
		 elBody.classList.add('lock');

	}
}
checkbox1.onclick = burger;


