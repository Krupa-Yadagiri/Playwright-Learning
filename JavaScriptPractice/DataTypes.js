//Rule: As Js it is dynamic language so we dont need to declare datatype while declaraing any variable

//to check the limit of number data type

Number.MIN_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER;
//1.
/*String - In js everything will be string  and there is no char type.
1. Single quote
2. Double quote 
3. template string back tick
*/

let Name = "Krupa";
let age = '26';
let role = `working as a system engineer at an IT company, 
            located in hyderabad.`
console.log("name is :" + Name, "\n age is :"+ age, "\n role is :"+ role);
console.log(typeof(Name, age, role)); //string

 //Scalar Variable  - ${variablename} - to read the values from the variable to get the current values.
 //ex - year, age, date

 //2.Number
 let a = 10;
 let b = 20;

 console.log("result is" , a+b);
 console.log(typeof(a)); //numner


 //3.boolean - to check value is true or false
 const isVisible = true;
 console.log("YES, it is visible");
 console.log(typeof(isVisible)) //boolean

 //4 - biginit - to increase the number more than the limited number value
 let x = 6790864545747n;
 console.log(x);
 console.log(typeof(x));

 //5 NULL - intensionally leaving it as empty - it retrurn object type due to its legacy behaviour in JS
 let city = null;
 console.log(city);
 console.log(typeof(city));

 //6 Undefined - variable is declared
 let Status;
 //console.log("status is " ,Status)
 console.log(typeof(Status));

 //7 symbol - unique identifier - NA for Automation

 //object literal - let object = {key:value} - need to define like this

 let object = {};
 console.log(typeof object);

 let student = {id:100, class: 3};
 console.log(student);
 student.address = "Hyderabad";
 console.log(student);

 delete student.class;
 console.log(student);

          