/*3 types of variables
-let ----> can be ressigned the value but can not redeclare
-const - fixed values and can not be reassigned
-var - old not recommended
*/

//Var - redeclaration and reassignment is allowed
var x = 100;
var x = 200;
var x = 300;

console.log(x)//300

//let - used for immutable data - can not be redeclared but reassignment is possible
let a = 10;
//let a = 20; - can not redeclared block scoped 
a = 20;

console.log(a)//20


//const - redeclaration and reassignment is not allowed
const id = '1001';
console.log(id); //1001

//Scope

