//Function Declaration

function add(n1,n2,n3){
    return n1 + n2+n3
};                                    

let sum = add(2,3,5)
console.log(sum)

let sum1 = add(2,3)
console.log(sum1)    // NAN                   because 2 + 3 + undefined = NAn



//function Expression

const sub = function(num1,num2)
{
    return num1 - num2;
}
console.log(sub(10,5));


// Arrow Functions

const greet = ()=>{
    console.log("Happy Birthday arrow functions")
}
greet();


const div = (a,b)=> {
    return a/b;
}
    
console.log(div(10,0))

const div2 = (a,b)=> a/b;
console.log(div2(100,2))



//Default Parameters

function addTwo(a,b=0){
    return a+b
}

console.log(addTwo(6))  //6
console.log(addTwo(2,3)) //5


// Rest Parameters

