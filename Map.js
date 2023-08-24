const map = new Map()
map.set("a",12)
map.set("b",13)
map.set("c",14)

console.log(map.size)

console.log(map.get("c"))

//same set methods

map.delete("c")
map.values()
map.has()
map.keys()
map.entries()     //[key,value]
map.clear()



let scores = new Map()
scores.set(20,2)
scores.set(18,8)
scores.set(21,10)
scores.set(42,23)
scores.set(30,27)


scores = new Map([...scores.entries()].sort())

for(let [key,value] of scores){
    console.log(key,value)
}