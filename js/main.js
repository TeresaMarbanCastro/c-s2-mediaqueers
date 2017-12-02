'use strict';

//función para desplegar sección
function editar(idContent){
document.getElementById(idContent).style.display = 'block';
}

//función para cerrar sección
function cerrar(idContent){
	document.getElementById(idContent).style.display = 'none';
}

//función para desplegar vista previa
function vistaPrevia(idContent){
document.getElementById(idContent).style.display = 'block';
}

function rellenar(){
    var datosNombre = prompt("Nombre:");
    var datosApellido = prompt("Apellido:");
		var datosProfesion = prompt("Profesión:");
		vistaPrevia("preview");

    document.querySelector("#datos-perfil").innerHTML = datosNombre + ' ' + datosApellido;
    document.querySelector("#datos-profesion").innerHTML = datosProfesion;
}

function rellenarextracto(){
	var datosExtracto = prompt("Escribe una pequeña descripción:");

	document.querySelector("#datos-extracto").innerHTML = datosExtracto;

}

function rellenarcontacto(){
	var datosTelefono = prompt("Teléfono:");
	var datosEmail = prompt("email:");

	document.querySelector("#datos-telefono").innerHTML = datosTelefono;
	document.querySelector("#datos-email").innerHTML = datosEmail;
}


//función para periodo de incio y periodo de fin

var monthOptions = '<option value="Enero">Enero</option>';
monthOptions = monthOptions + '<option value="febrero"> Febrero</option>';
monthOptions = monthOptions + '<option value="marzo">Marzo</option>';
monthOptions = monthOptions + '<option value="abril">Abril</option>';
monthOptions = monthOptions + '<option value="mayo">Mayo</option>';
monthOptions = monthOptions + '<option value="junio">Junio</option>';
monthOptions = monthOptions + '<option value="julio">Julio</option>';
monthOptions = monthOptions + '<option value="agosto">Agosto</option>';
monthOptions = monthOptions + '<option value="septiembre">Septiembre</option>';
monthOptions = monthOptions + '<option value="octubre">Octubre</option>';
monthOptions = monthOptions + '<option value="noviembre">Noviembre</option>';
monthOptions = monthOptions + '<option value="diciembre">Diciembre</option>';


var months = document.querySelectorAll('.month');
for (var i = 0; i < months.length; i++) {
	months[i].innerHTML = monthOptions;
}

var years = 2052;
var yearOptions = ''; //almacena options de html que van en el select

for (var initialYear=1949; initialYear<years; initialYear++) {
  yearOptions = yearOptions + '<option value=">' + (initialYear) + '</option>';
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length; i++) {
	yearsAll[i].innerHTML = yearOptions;
}

//función para nivel de idiomas
var options = '<option value ="A1">A1</option>';
var options = options + '<option value ="A2">A2</option>';
var options = options + '<option value ="B1">B1</option>';
var options = options + '<option value ="B2">B2</option>';
var options = options + '<option value ="C1">C1</option>';
var options = options + '<option value ="C2">C2</option>';

document.querySelector('#level').innerHTML = options;

var idModifier = 1;

//función añadir mas información
function addMore(){

	var itemRepeat = '<div class="newbutton"><input id="education" ' + idModifier + ' type="text" name="name" placeholder="Estudios">';
		itemRepeat += '<img class="much" id="more" src="images/more.png" alt="boton suma" onclick="addMore()">';
		itemRepeat += '</div>';


	var additional = document.querySelector('#addMore');
	additional.insertAdjacentHTML('beforeend', itemRepeat);
	idModifier++;
}
