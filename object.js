const person = {name : "Akhilesh", 
age:22, 
place:"Telangana",
Hobbies: ["cricket","reading","movie"]}

console.log(person.name);

console.log(person.Hobbies)

person.gender = "male";

console.log(person)

console.log(person["age"])          // we can get by this also


// Dot vs Bracket
//If there is space in keys ex:
const vehicle = {
    "tire" : "Bajaj",
    "front brake" : "TVS",
    "back brake" :  "Yamaha"
}                                                     // without "" in key we get error because of space

// console.log(vehicle.front break)  //ERROR                  // we cant't access with DOT because of space
console.log(vehicle["front brake"]);                 // We can access



// Iterate Objects
    // 1. Using  for in Loop
    // 2. Object.keys

    for(let key in person)
    {
        console.log(key)                 // Prints only keys
        console.log(person.key)          //undefined
        console.log(person[key])         // values will print
    }

    console.log(Object.keys(vehicle));        // prints keys Array
    for(let key of Object.keys(vehicle))
    {
        console.log(vehicle[key]);           // Prints values
    }


    //sperad Operator in Objects

const obj1 = {
    key1 : "valu1",
    key2 : "value2"
}
const obj2 = {
    key3: "value3",
    key1:"value4"
}
const newObj = {...obj1,...obj2}                  //Both contains same key1  last added Overrides the first value
console.log(newObj)


const nobj = {..."abc"}                    // 0-a 1-b 2-c

const arobj = {...["item1","item2"]}      // 0-Item1    1 - Item2
console.log(arobj)



// Object Destructing------------------------------------------------------------


const band = {
    bandName :"One Direction",
    song:"U&I",
    Year:2019,
    location:"America"

}
// const bandNa = band.bandName
// const songNa = band.song                       // General
// console.log(bandNa, songNa)

const {bandName,song} = band;                    //Only in one line we can assign
console.log(bandName)
console.log(song)

const {bandName:var1, song:var2} = band;         //changing Variable Name
console.log(var1)
console.log(var2)

const {song:var3, ...remain} = band
console.log(var3)
console.log(remain)                 // Objects prints (remaning bandname, year, location)




const students = [
    {name:"Akhil",age:22,gender:"male"},
    {name:"Kajal",age:28,gender:"Female"},
    {name:"Chandan",age:22,gender:"Female"}
]

//destructing
const [user1,user2,user3] = students
console.log(user1)

// i want name Akhil name and geneder from chahdan
const [{name}, ,{gender}] = students
console.log(name)             //Akhil
console.log(gender)           //Female