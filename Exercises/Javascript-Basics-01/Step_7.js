var size = parseInt(prompt("what is ur size shoe"))
var br = parseInt(prompt("what is ur birth year"))
var result;

function F1(size , br){
    result = size * 2;
    result+= 5;
    result -= br;
    result += 1766;
    return result;
}
alert("The result is" + F1(size , br));
