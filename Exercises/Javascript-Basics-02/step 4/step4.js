var a = document.querySelector("button");
var  b = document.querySelector("input");
a.addEventListener("click", clear)
function clear(){
var c;
if (confirm("yes or no")){
    yes = document.getElementById("name").value="";
    document.getElementById("surname").value="";
    document.getElementById("city").value="";
}
}