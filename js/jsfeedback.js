'use strict';
// //función alert
var shower = document.getElementById('fd');
var eva = document.querySelector('.thanks');
function alertHandler (){
	 eva.classList.add('show');
}
shower.addEventListener('click', alertHandler);

//
// //función formulario gracias no funciona
// function gracias(idContent){
// 	alert("Su respuesta ha sido enviada. ¡Muchas gracias!");
// document.getElementById("gracias").style.color = "blue";
// }
