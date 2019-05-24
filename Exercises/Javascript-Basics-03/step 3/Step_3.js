var red = document.querySelector(".red");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var paragraph = document.getElementById("text");
red.addEventListener("click", functionRed)

function functionRed () {
    paragraph.style.color = "red";
}

green.addEventListener("click", functionGreen)

function functionGreen () {
    paragraph.style.color = "green";
}


blue.addEventListener("click", functionBlue) 

function functionBlue () {
    paragraph.style.color = "blue";
} 