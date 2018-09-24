// **************   desplegables idiomas  ***************

//variables
var menuCircle = document.getElementById('menu__ContainerCircle');
var menuBanderas = document.getElementById('menu__Desplegable');
var menuDatos = document.getElementById('menu__ContainerDatos');
var varMostrar = false;
// function
function Mostrar() {
	menuBanderas.className += " menu__Desplegable--show";
	menuDatos.className += " menu__ContainerDatos--mostrar";
}
function Ocultar() {
	menuBanderas.className = "menu__Desplegable";	
	menuDatos.className = "menu__ContainerDatos";
}
menuCircle.addEventListener("click", () => {
	if (varMostrar == false) {
		Mostrar();
		varMostrar = true;
	} else {
		Ocultar();
		varMostrar = false;
	}

})


// ********************* Video *************************************

//Variables  
var mediaElement = document.getElementById("videoBg");
// funciones 
function cargarvideo() {
	if (window.matchMedia("(max-width: 800px)").matches) {// "menos de 700"
	    // mediaElement.src = "video/celrosa.mp4";
	    // mediaElement.src = "video/celrosa.webm";
	} else {// "mas de 700"
	    mediaElement.src = "video/animationBg.mp4";
	}
	videocargardo = true;
	return videocargardo
}
// action
cargarvideo();
// mediaElement.play();


// ********************* slade *************************************

//Variables  
var img1 = document.getElementById("containerImg__img1");
var img2 = document.getElementById("containerImg__img2");
var img3 = document.getElementById("containerImg__img3");
var img4 = document.getElementById("containerImg__img4");
var img5 = document.getElementById("containerImg__img5");
var img6 = document.getElementById("containerImg__img6");
var img7 = document.getElementById("containerImg__img7");
var i = 1;

function mostrarGif(){
	i ++;
	if ( i == 1) {
		console.log("es 1");
		img7.className = "containerImg__img";
		img1.className += " containerImg__img--mostrar";
	} else if ( i == 2) {
		console.log("es 2");
		img1.className = "containerImg__img";
		img2.className += " containerImg__img--mostrar";
	} else if ( i == 3) {
		console.log("es 3");
		img2.className = "containerImg__img";
		img3.className += " containerImg__img--mostrar";
	} else if ( i == 4) {
		console.log("es 4");
		img3.className = "containerImg__img";
		img4.className += " containerImg__img--mostrar";
	} else if ( i == 5) {
		console.log("es 5");
		img4.className = "containerImg__img";
		img5.className += " containerImg__img--mostrar";
	} else if ( i == 6) {
		console.log("es 6");
		img5.className = "containerImg__img";
		img6.className += " containerImg__img--mostrar";
	} else if ( i == 7) {
		console.log("es 7");
		img6.className = "containerImg__img";
		img7.className += " containerImg__img--mostrar";
		i = 0;
	}
}
if (window.matchMedia("(max-width: 501px)").matches) {// "menos de 700"
	intervalo = setInterval( mostrarGif, 2000);
} 

// ********************* slade testimoniales*************************************

//Variables  
var tes1 = document.getElementById("testimoniesContainer1");
var tes2 = document.getElementById("testimoniesContainer2");
var tes3 = document.getElementById("testimoniesContainer3");
var tesi = 1;

function mostrartes(){
	tesi ++;
	if ( tesi == 1) {
		console.log("es 1");
		tes3.className = "testimoniesContainer";
		tes1.className += " testimoniesContainer--mostrar";
	} else if ( tesi == 2) {
		console.log("es 2");
		tes1.className = "testimoniesContainer";
		tes2.className += " testimoniesContainer--mostrar";
	} else if ( tesi == 3) {
		console.log("es 3");
		tes2.className = "testimoniesContainer";
		tes3.className += " testimoniesContainer--mostrar";
		tesi = 0;
	}
}
if (!window.matchMedia("(max-width: 501px)").matches) {// "menos de 700"
	intervalo = setInterval( mostrartes, 4000);
} 

// ********************* Modal video*************************************

//Variables  
 
var modal = document.getElementById("modal");
var boton = document.getElementById("tryIt__button");
var cerrar = document.getElementById("cerrarModal");
var iframe = document.getElementById("iframe");
var mostrarMod = false;

function mostrarModal() {
	if (!mostrarMod) {
		modal.className += " modal--mostrar"
		mostrarMod = true;
		iframe.setAttribute("src","https://www.youtube.com/embed/4VFHAtY_NpA");
	}
}
function ocultarModal() {
	if (mostrarMod) {
		modal.className = "modal";
		mostrarMod = false;
		iframe.setAttribute("src","");
	}
}
boton.addEventListener("click", mostrarModal);
cerrar.addEventListener("click", ocultarModal);