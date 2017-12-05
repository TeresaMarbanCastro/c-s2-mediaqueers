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

//Rellenar formulario
function fillProfile(){
		var datosNombre = document.querySelector("#name").value;
		var datosApellido = document.querySelector("#lastname").value;
		var datosProfesion = document.querySelector("#profession").value;

		vistaPrevia("preview");
    document.querySelector("#datos-perfil").innerHTML = datosNombre + ' ' + datosApellido;
    document.querySelector("#datos-profesion").innerHTML = datosProfesion;
}
var saveProfile = document.querySelector('.saveProfile');
saveProfile.addEventListener('click', fillProfile);

function fillSummary(){
	var datosExtracto = document.querySelector("#summary").value;
		vistaPrevia("preview");
	document.querySelector("#datos-extracto").innerHTML = datosExtracto;
}
var saveSumary = document.querySelector('.saveSumary');
saveSumary.addEventListener('click', fillSummary);


function fillContact(){
	var datosTelefono = document.querySelector("#telephone").value;
	var datosEmail = document.querySelector("#email").value;
		vistaPrevia("preview");
	document.querySelector("#datos-telefono").innerHTML = datosTelefono;
	document.querySelector("#datos-email").innerHTML = datosEmail;
}
var saveContact = document.querySelector('.saveContact');
saveContact.addEventListener('click', fillContact);

function fillExperience(){
	var datosCargo = document.querySelector("#position").value;
	var datosEmpresa = document.querySelector("#experience").value;
	var datosInicioMes = document.querySelector("#month-start").value;
	var datosInicioAno = document.querySelector("#year").value;
	var datosFinMes = document.querySelector("#month-end").value;
	var datosFinAno = document.querySelector("#year-end").value;

	document.querySelector("#datos-cargo").innerHTML = datosCargo;
	document.querySelector("#datos-empresa").innerHTML = datosEmpresa;
	document.querySelector("#datos-inicio").innerHTML = datosInicioMes+ " " +datosInicioAno;
	document.querySelector("#datos-fin").innerHTML = datosFinMes+ " " +datosFinAno;
}
var saveExperience = document.querySelector('.saveExperience');
saveExperience.addEventListener('click', fillExperience);


function fillMore(){
	var datosEstudios = document.querySelector("#education").value;
	var datosIdiomas = document.querySelector("#languages").value;
	var datosNivel = document.querySelector("#level").value;
	var datosHabilidades = document.querySelector("#skills").value;
	var datosIntereses = document.querySelector("#interest").value;

	document.querySelector("#datos-estudios").innerHTML = datosEstudios;
	document.querySelector("#datos-idiomas").innerHTML = datosIdiomas;
	document.querySelector("#datos-nivel").innerHTML = datosNivel;
	document.querySelector("#datos-habilidades").innerHTML = datosHabilidades;
	document.querySelector("#datos-intereses").innerHTML = datosIntereses;
}
var saveMore = document.querySelector('.saveMore');
saveMore.addEventListener('click', fillMore);




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

for (var initialYear=1950; initialYear<years; initialYear++) {
  yearOptions = yearOptions + '<option>' + (initialYear) + '</option>';
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

//función formulario gracias no funciona
function gracias(idContent){
	alert("Su respuesta ha sido enviada. ¡Muchas gracias!");
document.getElementById("gracias").style.color = "blue";
}
