/*
Operators

*Arthimatic - +, -, *, /%
Unary operators
1.Pre increment i++
2. Post increment ++i
*Shorthand operators  - +=, -=, *=, /=

*Relational Operators - &&(AND), //(NOR), !(NOT)

*/

//Pre increment ++i
let a = 10;
let b = ++a;
console.log(a); // 11
console.log(b); //11

//post increment i++
let p = 100;
let q = p++;
console.log(p); //101
console.log(q); //100

//pre decrement --i
let x = 1000;
let y = --x;
console.log(x); //999
console.log(y); //999

//post decrement i--
let m = 20;
let n = m--;
console.log(m); //19
console.log(n); //20

//Relational Operators - <, <=, >, >=, != ---always gives boolean values

console.log(m>n); //false
console.log(a>=b); //true
console.log(p<q); //false
console.log(p<=q); //false
console.log(x!=y); //false



//loose equality - value type changed first then compares
console.log("100" == 100);//true
console.log(null == undefined);//true

//strict equality  - compares as it is - do not change value type
console.log("100" === 100);//false
console.log(null === undefined);//false

//Logical operators - &&, //, !

console.log((n>m) && (a!=b));//false
console.log((x>=y) || (p<=q));//true
console.log(!(a===b));//false





