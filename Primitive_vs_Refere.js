// Primitive

let num1 = 8
let num2 = num1
num1++;
console.log(num1)  // 9
console.log(num2)   // 8


//reference

let arr = [1,2,3,4]
let arr2 = arr
console.log("arr1 is",arr)
console.log("arr2 is", arr2)

arr2.unshift(21)
console.log("arr1 is",arr)
console.log("arr2 is", arr2)                  //If i changes any of array both arrays are effecting    these are referemce to each