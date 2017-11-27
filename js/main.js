'use strict';

//función para desplegar sección


function editar(idContent){

document.getElementById(idContent).style.display = 'block';

}


//función para cerrar sección
function ocultar(idContent){
	document.getElementById(idContent).style.display = 'none';
}


//función para periodo de incio y fin
var initialMonth = "Enero";
initialMonth = parenInt(initialMonth);
var months = 12;
var option = '<option value="Febrero"></option>'
var option = '<option value="Marzo"></option>'
var option = '<option value="Abril"></option>'
var option = '<option value="Mayo"></option>'
var option = '<option value="Junio"></option>'
var option = '<option value="Julio"></option>'
var option = '<option value="Agosto"></option>'
var option = '<option value="Septiembre"></option>'
var option = '<option value="Octubre"></option>'
var option = '<option value="Noviembre"></option>'
var option = '<option value="Diciembte"></option>'

for (j = 0; j < months; j++) {
  options = options + '<option value="' + (initialMonth+j) + '">' + (initialMonth+j) + '</option>';
}
document.querySelector('#month').innerHTML = options;

var initialYear = 1950;
var years = 150;
var options = ''
//var option = '<option value=""></option>'

for (i = 0; i < years; i++) {
  options = options + '<option value="' + (initialYear+i) + '">' + (initialYear+i) + '</option>';
}
document.querySelector('#year').innerHTML = options;

//función para nivel de idiomas
var initialLevel = "A1";
initialMonth = parenInt(initialLevel);
var option = '<option value="A2"></option>'
var option = '<option value="B1"></option>'
var option = '<option value="B2"></option>'
var option = '<option value="C"></option>'

for (k = 0; k < months; k++) {
  options = options + '<option value="' + (initialLevel+j) + '">' + (initialLevel+j) + '</option>';
}
document.querySelector('#month').innerHTML = options;
