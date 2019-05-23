var picture1 = document.querySelector("#image1");
var picture2 = document.querySelector("#image2");
var picture3 = document.querySelector("#image3");
var picture4 = document.querySelector("#image4");
var picture5 = document.querySelector("#image5");

picture1.addEventListener("mouseover", changement)
picture2.addEventListener("mouseover", changement)
picture3.addEventListener("mouseover", changement)
picture4.addEventListener("mouseover", changement)
picture5.addEventListener("mouseover", changement)

picture1.addEventListener("mouseout", changement)
picture2.addEventListener("mouseout", changement)
picture3.addEventListener("mouseout", changement)
picture4.addEventListener("mouseout", changement)
picture5.addEventListener("mouseout", changement)

function changement (xx){
    // picture1.src="images/image1_2.jpg";
    // picture2.src="images/image2_2.jpg";
    // picture3.src="images/image3_2.jpg";
    // picture4.src="images/image4_2.jpg";
    // picture5.src="images/image5_2.jpg";
    if (xx.target.id == "image1")
    {    xx.target.src = "images/image1_2.jpg" 

}
else if(xx.target.id == "image2"){
xx.target.src = "images/image2_2.jpg"

}
else if (xx.target.id == "image3"){
    xx.target.src ="images/image3_2.jpg"
}
else if (xx.target.id == "image4"){
xx.target.src = "images/image4_2.jpg"
}

else if (xx.target.id== "image5")
{
    xx.target.src = "images/image5_2.jpg"
}
}

