var body = document.getElementsByTagName("body")[0];
var divFormulario = document.getElementById("formulario");
var formulario = document.createElement("form");

divFormulario.appendChild(formulario);

var btnTituloCd = document.getElementById("btnTituloAlbum").addEventListener("click",generarTituloCd);
var btnEstiloMusical = document.getElementById("btnEstiloMusical").addEventListener("click",generarEstiloMusical);
var btnCanciones = document.getElementById("btnCanciones").addEventListener("click",generarCanciones);
var btnOptEx = document.getElementById("btnOptEx").addEventListener("click",generarOptExclusivas);
var btnEnviar = document.getElementById("btnEnviar").addEventListener("click",generarBotonFinal);

function generarLabel(texto){
	var label = document.createElement("label");
	var contenidoLabel = document.createTextNode(texto);
	label.appendChild(contenidoLabel);
	return label;
}

function generarTituloCd(){
	var div = document.createElement("div");
	div.id = "tituloCd";
	var label = generarLabel("Titulo: ");
	var inputText = document.createElement("input");
	inputText.type = "text";
	div.appendChild(label);
	div.appendChild(inputText);
	formulario.appendChild(div);
}

function generarEstiloMusical(){
	var div = document.createElement("div");
	div.id = "estilo";
	var label = generarLabel("Estilo: ");
	var options = ["rock","metal","pop","rap","trap","funky","soul"];
	var comboBox = document.createElement("select");
	
	for(var i = 0; i < options.length; i++){
		var opciones = document.createElement("option");
		opciones.value = options[i];
		opciones.text = options[i];
		comboBox.appendChild(opciones);
	}
	
	div.appendChild(label);
	div.appendChild(comboBox);
	formulario.appendChild(div);
}

function generarCanciones(){
	var numCanciones = prompt("Introduzca numero de canciones: ");
	for(var i = 0;i < numCanciones; i++){
		var div = document.createElement("div");
		div.id = "cancion " + i;
		var labelTlCancion = generarLabel("Titulo de la cancion: ");
		var input = document.createElement("input");
		input.type = "text";
		div.appendChild(labelTlCancion);
		div.appendChild(input);
		var labelTlDuracion = generarLabel("Duracion: ");
		var input = document.createElement("input");
		input.type = "number";
		div.appendChild(labelTlDuracion);
		div.appendChild(input);
		formulario.appendChild(div);
	}
}

function generarOptExclusivas(){
	var div = document.createElement("div");
	div.id = "tituloCd";

	var label = document.createElement("label");
	var contenidoLabel = document.createTextNode("¿Disponible en plataformas digitales?");
	label.appendChild(contenidoLabel);
	formulario.appendChild(label);

	var rb = document.createElement("input");
	rb.type = "radio";
	rb.name = "OptEx";
	var label = document.createElement("label");
	var contenidoLabel = document.createTextNode("Si");
	label.appendChild(contenidoLabel);
	formulario.appendChild(label);
	formulario.appendChild(rb);

	
	var rb2 = document.createElement("input");
	rb2.type = "radio";
	rb2.name = "OptEx";
	var label2 = document.createElement("label");
	var contenidoLabel2 = document.createTextNode("No");
	label2.appendChild(contenidoLabel2);
	formulario.appendChild(label2);
	formulario.appendChild(rb2);
}

function generarBotonFinal(){
	var nombreBoton = prompt("Introduzca el value que le quiere dar al boton");
	var div = document.createElement("div");
	var input = document.createElement("input");
	input.type = "submit";
	input.value = nombreBoton;
	div.appendChild(input);
	formulario.appendChild(div);
}