// document.getElementById('but').onclick = func1();
function reze() {
	let element = document.getElementById('but');
	element.classList.add("geroi");
}
function reze1(){
	let element = document.getElementById('but');
	element.classList.remove("geroi")
}
function reze3(){
	let element = document.getElementById('but');
	if (element.classList.contains('geroi')){
		reze1();
	}else{
		reze();
	}
}

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
but.onclick = reze3;

