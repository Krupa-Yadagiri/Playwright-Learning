/*
Type Casting - Can convert one type of data to other
1. Implicit - automatic
2. Explicit - manual by using constructors
*/

//- string conversion

let a="hello"+100+true;//100 and true both coerced into string
console.log(a);//hello100true
console.log(typeof a);//string

let b=100+25+"Hi";//100+25=125+"hi"-->here 125 is coerced into string
console.log(b);//125hi
console.log(typeof b);//string

//Number conversion

let x="Hello"-100;
console.log(x);//NaN
console.log(typeof x);//number

let d="100"/10;//"100"--100=100/10=10 here "100" coerced into number
console.log(d);//10
console.log(typeof d);//number

//expression with boolean and number---numberconversion
console.log(true+50);//1+50=51//boolean converted into number
console.log(true*10);//1*10=10
console.log(false*10);//0*10=0

//Explicit

//string--->number
let s1="1234";
console.log(s1);//1234
console.log(typeof s1);//string

//string--->number
let stringToNumber=Number(s1);

console.log(stringToNumber);//1234
console.log(typeof stringToNumber);//number

//boolean --->number
console.log(Number(true));//1
console.log(Number(false));//0

let num=90;
console.log(num);//90
console.log(typeof num);//number

//number-->string()
let numToString=String(num);

console.log(numToString);//90
console.log(typeof numToString);//string

//boolean --->string
let i=true;
let booleanToString=String(i);
console.log(booleanToString);//true
console.log(typeof booleanToString);//string
