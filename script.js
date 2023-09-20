var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("background");
var buton = document.querySelector("button");

function gradient(){
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomizare(){
	var cul1 = (Math.random() * 0xfffff * 1000000).toString(16);
	var cul2 = (Math.random() * 0xfffff * 1000000).toString(16);
	cul1 = "#" + cul1.slice(0, 6);
	cul2 = "#" + cul2.slice(0, 6);
	color1.value = cul1;
	color2.value = cul2;
	gradient();
}

gradient();
color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);
buton.addEventListener("click", randomizare);