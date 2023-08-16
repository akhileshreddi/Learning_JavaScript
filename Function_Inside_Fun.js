const div = function(a,b){
    
    const myfun = ()=>{
        console.log("Hello from myFunc")
    }
    
    const add = (a,b)=>{
        return a+b;
    }

    const mul = ()=> console.log(add(a,b)*10)

    myfun();
    mul()

    return add(a,b)/b;
    
 
}


console.log(div(20,5));


////////

function fun1(){
    const chan = "value1"
    
    const fun2 = ()=>{
        const chan = "value69"
        console.log("Inside fun2",chan)                //It prints value69   ***(But when above line commented then it prints value1 )
    }

    console.log(chan)                 //value1
    fun2()
    console.log(chan)                //value1
}
// changes made