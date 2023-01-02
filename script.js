/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	console.log("CLICK!!!!");
});*/


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];

function setGradient(){
	body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lista = document.getElementsByClassName("lstShopping");

function lstLength(){
	return lista[0].getElementsByTagName("li").length;
}

var toggleOn = true;

function inputLength(){
	return input.value.length;
}

function trocaEventToogle(li){
			if(toggleOn) toggleOn = false;
			else toggleOn = true;
			console.log(toggleOn);
			//console.log(li.innerText.split(" ")[0]);
}

function atualizaToggleLi(){
	var _li = lista[0].getElementsByTagName("li");
	for(var i = 0; i < lstLength(); i++){
		_li[i].style.color = "green";
		_li[i].addEventListener("click", trocaEventToogle);
	} 
}
atualizaToggleLi();

function nameClassBtnRemover(){
	var tamanhoLst = lstLength();
	return "<button class=\"r_"+tamanhoLst+"\">Remover</button>";
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = input.value + " " + nameClassBtnRemover();
	ul.appendChild(li);
	input.value="";
	atualizaToggleLi();
}

function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if(inputLength() > 0 && event.code === "Enter"){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

