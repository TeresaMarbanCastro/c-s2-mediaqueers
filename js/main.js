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

	document.getElementById("datos-nombre").innerHTML= datosNombre;
	document.querySelector("#datos-apellido").innerHTML = datosApellido;
}

function rellenarcontacto(){
	var datosTelefono = prompt("Teléfono:");
	var datosEmail = prompt("email:");

	document.querySelector("#datos-telefono").innerHTML = datosTelefono;
	document.querySelector("#datos-email").innerHTML = datosEmail;	
}
