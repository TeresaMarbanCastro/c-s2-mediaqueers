'use strict';

//función para desplegar sección
function editar(idContent){
document.getElementById(idContent).style.display = 'block';
}

//función para cerrar sección
function cerrar(idContent){
	document.getElementById(idContent).style.display = 'none';
}



function rellenar(){
	var datosNombre = prompt("Nombre:");
	var datosApellido = prompt("Apellido:");

	document.querySelector("#datos-nombre").innerHTML = datosNombre;
	document.querySelector("#datos-apellido").innerHTML = datosApellido;
}

function rellenarcontacto(){
	var datosTelefono = prompt("Teléfono:");
	var datosEmail = prompt("email:");

	document.querySelector("#datos-telefono").innerHTML = datosTelefono;
	document.querySelector("#datos-email").innerHTML = datosEmail;
}


//función para periodo de incio y fin
var options = '<option value="Enero">Enero</option>';
options = options + '<option value="Febrero"> Febrero</option>';
options = options + '<option value="Marzo">Marzo</option>';
options = options + '<option value="Abril">Abril</option>';
options = options + '<option value="Mayo">Mayo</option>';
options = options + '<option value="Junio">Junio</option>';
options = options + '<option value="Julio">Julio</option>';
options = options + '<option value="Agosto">Agosto</option>';
options = options + '<option value="Septiembre">Septiembre</option>';
options = options + '<option value="Octubre">Octubre</option>';
options = options + '<option value="Noviembre">Noviembre</option>';
options = options + '<option value="Diciembre">Diciembre</option>';

document.querySelector('#month').innerHTML = options;

var initialYear = 1950;
var years = 100;
var options = ''; //almacena options de html que van en el select

for (var i=0; i<years; i++) {
  options = options + '<option>' + (initialYear+i) + '</option>';
}
document.querySelector('#year').innerHTML = options;

// var initialYear = 1950;
// var years = 150;
// var options = '';
// //var option = '<option value=""></option>'
//
// for (i = 0; i < years; i++) {
//   options = options + '<option value="' + (initialYear+i) + '">' + (initialYear+i) + '</option>';
// }
// document.querySelector('#year').innerHTML = options;

//función para nivel de idiomas
var initialLevel = "A1";
initialMonth = parseInt(initialLevel);
var option = '<option value="A2"></option>'
var option = '<option value="B1"></option>'
var option = '<option value="B2"></option>'
var option = '<option value="C"></option>'

for (var k = 0; k < months; k++) {
  options = options + '<option value="' + (initialLevel+j) + '">' + (initialLevel+j) + '</option>';
}
document.querySelector('#month').innerHTML = options;
