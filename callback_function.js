function func1(){
    console.log("Inside Fun1")
}


function func2(a){
    console.log(a)            // prints complete function (func1)
    a();                     // calls func1()

}


func2(func1)