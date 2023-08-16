
// Hoisting in Function Declaration
hello();          //method called before its declaration (called Hoisting)
function hello(){
    console.log("GOOD MOrining")
}

/*** Hoisting won't work with function Expression below code gets error */

// greet();
// const greet = function(){
//     console.log("Greet Morning")
// }

/*Hosting won;t work for Below  Arrow Functions also */

even();
const even = ()=>console.log("This is Arrow Function")
