var a = 7;
var b = "7";

console.log(a != b)     // False       but we should get true  (conversion happening)
console.log(a !== b)  //true           (conversion Not hapens)

console.log(a == b)    //true   (losse)
console.log( a === b)   //false  (strict)

// Falsy values
//1. false
//2. ""
//3. null
//4. undefined
//5. 0

var name = "";           //ANy above will give false
if(name)
{
    console.log(name);
}else{
    console.log("Not valid Name");
}

// Ternary Operator

const prompt  = require('prompt-sync')();                 //REQUIRED TO TAKE INPUT IN NODE JS
let nn = prompt("Enter a number");                       // TAKING INPUT FROM USER
console.log(nn);

