//Functions - reusable block of code to perform a specific task
/*
3 types
1.Function declaration
2.Function Expression
    2.1.Anonymous function(function without name)
    2.1 Arrow function(shortHand function)

*/ 

//function declaration - just creating a function

function student()
{
    let studentId = 101;
    console.log("Student id is: " +studentId);
}
student() //101

//Anonymous function - function without name
let test = function()
{
   console.log("anonymous function");
}
test() 
console.log(typeof test); //function

//Arro function

let test2 = ()=>
{
    let animal = "Dog"
    console.log(animal);

}
test2()
console.log(typeof test2);