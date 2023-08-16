// imp array methods

//forEach
//map
//filter
//reduce

const numbers = [1,2,3,4,5,6,7,8]

function mult(num, idx){
    console.log(`index is ${idx}`)
    console.log(num*2)
}

// for(let i=0; i<numbers.length; i++){
//     mult(numbers[i],i);
// }

numbers.forEach(mult)          //1-param(number)   2 - index   //works same as above

numbers.forEach((num)=>console.log(num))    // print all values in numbers


const persons = [
    {name:"akhil",age:23},
    {name:"abhil",age:28},
    {name:"kholi",age:33}
]


persons.forEach((obj)=>console.log(obj.name,obj.age))




// Map Method

// It will change the values in Array and we can store in other array
// what function returns it stored in array

const scores = [3,6,5,8,9,12,14]

function add(num){
    return num+num
}

const newArray = scores.map(add)
console.log(newArray)

const squArray = scores.map((num)=>num*num)
console.log(squArray)



//Filter
//this will apply only boolean logic for values in array (and we get only values present in array)

function even(num){
    return (num%2)===0;                //accepts true or false (not any operation)
}

const eveArray = scores.filter(even)
console.log(eveArray)                  //even array

const oddArray = scores.filter((num)=>(num%2)!=0)
console.log(oddArray)               //odd array



//Reduce Method
// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

const ages =  [1,2,3,4,5]

const sum = ages.reduce((Accumulator,currentValue)=>{
    console.log("Accumulator  ",Accumulator)
    console.log("CurrentValue ",currentValue)                            // accumator = accumator + currentvalue
    return Accumulator+currentValue;

});
console.log(sum)

const idxSum = ages.reduce((total,cur,index)=>{
    console.log("TOT",total)
    return total + cur + index                           // total = total + arr[idx] + idx
},0)
console.log("IdxSum",idxSum)


const cart = [
    {pid:1,product:"Mobile",price:14000},
    {pid:2,product:"Laptop",price:70000},
    {pid:3,product:"Tv",price:7000}
]

// we can pass Intial Value for Accumulator(total)


const cartSum = cart.reduce((total,cur)=>{
    console.log("total", total)                                     // total(initial) = 0    , total = total + cur.price
    console.log("CurrObj",cur)
    return total + cur.price
},0);
console.log(cartSum)



