var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var h2 = document.querySelector("h2");

function MostrarColorAnterior(){
	var nuevo = document.createElement("h2");
	nuevo.appendChild(document.createTextNode("El color anterior es: " + color1.value + " , " + color2.value));
	h2.appendChild(nuevo);
}


function createBackground(){

	body.style.background = "linear-gradient(to right, " 
							+ color1.value + "," 
							+ color2.value 
							+")";

	css.textContent = "la combinación de colores es: " + color1.value + " , " + color2.value;
}

MostrarColorAnterior();

color1.addEventListener("input", createBackground);

color2.addEventListener("input", createBackground);



