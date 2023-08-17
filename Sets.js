const numbers  = new Set()
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(2)
numbers.add(3)
numbers.add(4)

console.log(numbers.size)


console.log(numbers.values())

const iterator = numbers.values()
for( let it of iterator){
    console.log(it)
}

//Set has No Keys
const iterator1 = numbers.keys()         //works same as values
for( let it of iterator1){
    console.log("keys",it)
}

// Even for entries  give Pair [value, value]
const Entries = numbers.entries()         //works same as values
for( let it of Entries){
    console.log("Ent",it)
}

numbers.delete(2)       //deletes
console.log(numbers)

const ans = numbers.has(1)   //return true

numbers.clear()       //clear everything