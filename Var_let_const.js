//Var

/* It is Not block it is Hoisted*/

console.log(name)        //Prints undefined
{
   
}
name = "ABC"
console.log(name)
var name;               //Prints Name (Hoisting)


/*Let  (block scope) */

// x = 10
// let x;                            ERROR   (No HOISTING in let)
// console.log(x)

{
    let hello = "Hello"
    console.log(hello)      //prints Hello
    hello = "New Hello"
    console.log(hello)        //prints New Hello    (we can change for let but Not const)
}
// console.log(hello)            //ERROR  (outside block)




// CONST (block scope)

/* CONST MUST be Decraled First (it gives syntax error) */



// const pi;            // SYNTAX ERROR
const pi= 3.141;
{
    console.log(pi)
    // pi = 3.414
    // console.log(pi)
}                      
console.log(pi);