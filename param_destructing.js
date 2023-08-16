const person = {
    name : "Akhilesh",
    age : 23,
    place : "Pathipaka"

}


function print(obj){
    console.log(obj.name)
    console.log(obj.age)
    console.log(obj.place)
}

print(person)

function details({name,age,place}){
    console.log(name)
    console.log(age) 
    console.log(place)
}

details(person)




