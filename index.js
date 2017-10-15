function formSumbit(e) {
	e.preventDefault();
	var number = Number(e.target.num.value);
	console.log('type:', typeof number);
	console.log(number);
}

document.getElementById('my-form')
.addEventListener('sumbit',formSumbit);