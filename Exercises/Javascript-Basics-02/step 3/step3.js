 var x = document.createElement("div");
 
 var b= document.querySelector("input");
 
 b.onkeyup= function change(){
     x.innerText= b.value;
     document.body.appendChild(x);
 }
 