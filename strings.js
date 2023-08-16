console.log("hello")
//trim()
// tolowerCase()
//toUpperCase()
// slice()
//split 
//substr
// charAt

var name = "Akhilesh";
console.log(name.slice(0,4));
console.log(name.slice(0));
console.log(name.slice(-1));
console.log(name.slice(-1,-3));

let add = "warangal Telangana India"
let sp = add.split(" ");
console.log(sp[0]);

var name = name.substr(0,3);
console.log(name);


let age = 22
//convert number to string
let age1 = 22 + " "   // "22"    (It is string)
var  ag = String(age);    //    String


// String to Number
let mystr = "245"
console.log(typeof(mystr))       // String

var nn = Number(mystr)       //Number

mystr = +"256"

console.log(typeof(mystr))      //number


//  IMP

let r1 = "25"
let r2 = "65"

console.log(r1+r2)    // 2565
console.log(+r1 + +r2) // 90                                   we know + before string convert to Number
console.log(+"abc"+ +"mnc")  // NaN




// Template String

var Num = 24
var myNamme = "Akhilesh"

var about = `My Name is "${myNamme}" and my age is ${Num}`;               // Insted of +  use ` `  
console.log(about);



//BigINt

let mynum = BigInt(111173823823821461236123);
let myNum = 1234n;          //BigInt
console.log(mynum + myNum);

let num = 234;
// console.log(myNum + num);                 // Error; BigInt works only with BigInt


