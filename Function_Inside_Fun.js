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
    const myvar = "value1"
    
    const fun2 = ()=>{
        const myvar = "value69"
        console.log("Inside fun2",myvar)                //It prints value69   ***(But when above line commented then it prints value1 )
    }

    console.log(myvar)                 //value1
    fun2()
    console.log(myvar)                //value1
}

