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



// Every

// It return whether true or false

const score = [2,10,8,20,22,24,3]

const ans = score.every((number)=>number%2==0)       //return true only every value is even
console.log("ans", ans)


//Some method
//If one is present return true

const ans1 = score.some((num)=>num%2==0)           //returns true if atleast one is true
console.log(ans1) 



//Fill method
const arry = new Array(5).fill(false)
console.log(arry)

const narray = [1,2,3,4,5,6,7,8]
narray.fill(-1,2,7)                            //Fills  -1  from(2,7)
console.log(narray)


//splice

const items = ["item1","item 2","item 3","item 4","item 5"]
items.splice(1,2)                         //From index 1 it deletes 2 items
console.log(items)

items.splice(1,0,"changed_item")  //inserted after index 1
console.log(items)

items.splice(1,2,"deleted_item")
console.log(items)                     //deletes 2 items after index 1 and added deleteditem