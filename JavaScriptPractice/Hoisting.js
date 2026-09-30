//Hoisting - behaviour where you can accessible the variable before even declaring

/*var is fully hoisted
function declaraton fully hoisted

let and const and modern function syntax

Temporal Dead Zone is the period between entering a scope and the point where 
a let or const variable is declared, during which accessing the variable causes a ReferenceError.

Hoisting = JavaScript knows the declaration early.
TDZ = let/const are known, but locked until their declaration is reached. 🔒
*/
//Var - hoisted
console.log(x); //undefines
var x = 100;
console.log(x); //100

//let - 
//console.log(y); //ReferenceError: Cannot access 'y' before initialization
let y = 102;
console.log(y);

//const 
//console.log(z); //ReferenceError: Cannot access 'z' before initialization
const z = "City";
console.log(z);