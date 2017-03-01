//document.write('hola en javascript')
/*var cajas = document.getElementsByTagName('div')
cajas[0].textContent = 'Hola mundo'
cajas[1].innerHTML = '<b> Hola Javascript </b>'
*/
//var caja = document.getElementById('primera');
//caja.textContent = 'primera caja';
//No se recmienda agregar elementos con el metodo write
//document.write('<div class = "caja" >Nuevo elemento</div>');

//>>>>>>>>> PASOS PARA CREAR UN NUEVO ELEMENTO AL DOM: <<<<<<<<<<<<<<
//   PASO 1. Crear el nuevo elemento createElement()
var elementoNuevo = document.createElement("div");

//   PASO 2. Crear el contenido createTextNode()
var nodoContenido = document.createTextNode("nuevo elemento");

//   PASO 3. Añadir el contenido al elemento appendChild()
elementoNuevo.appendChild(nodoContenido);

//   PASO 4. Agregar atributos al elemento setAttribute()
elementoNuevo.setAttribute("class","caja colorCoral");

//   PASO 5. Agregar el elemento al documento appendChild()
//var contenedor = document.getElementById("contenedor");
//contenedor.appendChild(elementoNuevo);

//para agregar los nuevos elementos donde quiera debo acceder al primer elementopara agregarlo antes o despues de este
var contenedor = document.getElementById("contenedor");
var segunda = document.getElementById("segunda");
contenedor.insertBefore(elementoNuevo,segunda);

var tercera = document.getElementById("tercera");
contenedor.removeChild(tercera);