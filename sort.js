const items = ["Apple","Zebra","Banana","Bananz","Carrot",3,4,5]
items.sort()
console.log(items)



const strNumbers = ["25","100","120","14","17"]
strNumbers.sort()                            
console.log(strNumbers)               // 100 120 14 17 25   (incorrect)  we use compare


const Numbers = [1,3,10,150,500]
Numbers.sort((a,b)=>{
    return b-a                        //Descending Order
})
console.log(Numbers)



const persons = [
    {id:1,age:21,marks:59},
    {id:1,age:23,marks:80},
    {id:1,age:20,marks:90},
    {id:1,age:24,marks:59},
]

persons.sort((a,b)=>{
    return a.marks == b.marks ? a.age - b.age : b.marks - a.marks                     
})

console.log(persons)



// Find Method (return single element)

const animal = ["cat","Zebra","dog","Crocadile","Ant"]

function islength3(str){
    return str.length === 3
}
const anim = animal.find(islength3)
console.log(anim)                          //prints   cat


//every Method  (checks every value returns boolean )

const ans = animal.every((a)=>a.length===3)
console.log(ans)                             // returns false    because Not every element is length = 3


const len3 = [2,4,8,10,12];
const ans2 = len3.every((b)=>b%2===0);
console.log(ans2)                           //return true



const score = [21,22,13,14,15]