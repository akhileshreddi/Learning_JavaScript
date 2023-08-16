let fruits= ["apple","banana","mango"];
console.log(fruits.length)
let number = [1,2,3,4]
let mixed = [2,3,null,"Akhil", undefined]        // In this all are deferent types
console.log(typeof(mixed))          // Object


let obj = {}
console.log(Array.isArray(number))  //true
console.log(Array.isArray(obj))    // false



// Push and Pop

fruits.push("PineApple");
console.log(fruits)


fruits.pop()
console.log(fruits)


//Unshift - add element in starting
fruits.unshift("Kaya")
console.log(fruits)

// Shift - removes starting element
fruits.shift()
console.log(fruits)


//CLONING 

// slice
let num2 = number.slice(0)       //num2 gets all number elemtns

let num3 = [4,5,6].concat(number)   
console.log(num3)

// spread Operator
let arr2 = [...fruits]                 //MOSTLY we use this 
console.log(arr2)


//Concating two ARRays

let marr = fruits.slice(0).concat("Pine","Dates")
let Myfruits = ["Pomgrenate","Orange","sapota"]
let narr = [...fruits, ...Myfruits]                       //both arrays concates
console.log(narr)



//Constant Array
const ages = [21,23]
ages.push(34)
console.log(ages)     // 21 23 34
/* Because we are Not changing address of array so simply it can push or pop */

// ages = [21,23,34]                      //Not possible gives Error  (ages address is different now)
// console.log(ages)                    // It gives Error




//LOOPs
//1.for
//2.while
//3. For of

for(let fruit of fruits)
{
    console.log(fruit)
}

//4. FOR in

for(let index in fruits)
{
    console.log(index)
    console.log(fruits[index])
}




//

const balls = ["cricket","football","votakayas"]
// let b1 = balls[0]
// let b2 = balls[1]            -->This is more lines
// let b3 = balls[2]  

let [b1,b2,b3,b4] = balls           //-->Single Line assining
console.log(b1,b2,b3,b4);           //b4 gets undefined

let [r1, ...ballarr] = balls         // in r1 = cricket            and ballarr = [football,votakays]
console.log(ballarr)