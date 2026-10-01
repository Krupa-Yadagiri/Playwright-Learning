/*Assignments On Operators
=============================
Guess the output?
---------------------
1.console.log(1 + "2" + 3); OP - 123
2.console.log(1 + 2 + "3"); OP - 33
3.console.log("5" * true); Op- 5true
4.console.log(10 > 5 > 1); Op - true
5.
let a = 2;
    let b = a++ + ++a; 
    console.log(a, b); 
Output - 4, 6

6.
let a = 3;
console.log(a++ + a++ + ++a); 3+4 +6 //13
Output - 13

7.console.log(5 * 2 == "10");
Output - true

8.
let x = 1;
let y = ++x + x++ + x; 2+2+3 =7
console.log(x, y); 3, 7
Output - 3,7

9.console.log(10 > 5 && 20 < 30);
Output - true

10.console.log(null || undefined || "Playwright");
Output - playwright   
*/

/*

-----------------------------------------------------------------
JavaScript Practice: Type Coercion & Explicit Conversion
===========================================================

Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.

Expected Output:
1500

*/
let price = "500";
let quantity = "3";
let totalPrice = price * quantity;
console.log(totalPrice); //1500
console.log(typeof totalPrice); //number

/*
Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.

Expected Output:
1200
 */

let price2 = "1000";
let tax = "200";
let finalPrice = Number("1000") + Number("200");
console.log("final price is " + finalPrice);  //1200

/*
Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual + expected);
 */
let actual = "100"; //string
let expected = 20; //number
console.log(actual + expected); //10020


/*
Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);
*/

let actual2 = "100";
let expected2 = 20;
console.log(actual - expected); //80

/*
Problem 5 — UI Value and Assertion
A UI displays:
100
The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
Check the result of:
console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);

*/

let actualPrice = "100"; //string
let expectedPrice = 100; //number
console.log(actualPrice == expectedPrice); //true
console.log(actualPrice === expectedPrice); //false

/*

Problem 6 — Fix the Assertion
The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);

Modify the code so that the assertion gives:
true
*/
let actualPrice2 = "500";
let expectedPrice2 = 500;
console.log(Number(actualPrice) === expectedPrice);
/*

Problem 7 — Environment Variable
An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type

Expected Output:
30000
number

*/

let timeout = "30000"; //string
let timeoutinNumber = Number(timeout);
console.log("The Value is " + timeoutinNumber);
console.log(typeof(timeoutinNumber));

/*

Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345

*/


let orderId = 12345; //number
let orderIdinString = String(orderId);
console.log("ORDER-" + orderIdinString); //ORDER-12345
/*

Problem 9 — Boolean API Value
An API returns:
let status = "true";
Convert this value into an actual Boolean.

Expected Output:
true
boolean

*/
let statusofAPI = "true" //string
let statustoBoolean = Boolean(statusofAPI); 
console.log(statustoBoolean);
console.log(typeof(statustoBoolean));
/*

Problem 10 — Input Field Value
A Playwright test retrieves a quantity from an input field:
let quantity = "5";
The expected quantity is:
let expectedQuantity = 5;

*/
let quantity2 = "5"; //Number
let expectedQuantity = Number(quantity2); //5
console.log("The expected quantity is: " + expectedQuantity); //5
console.log(typeof(expectedQuantity)); //number
/*

Problem 11 — Calculate Cart Total
An e-commerce application provides:
let price = "799";
let quantity = "2";
let discount = "100";
Calculate:
(price × quantity) - discount

Expected Output:
1498

*/
let cartPrice = "799";
let cartQuantity = "2";
let cartDiscount = "100";
let totalCartPrice = cartPrice * cartQuantity - cartDiscount; //automatice number coercion
console.log(totalCartPrice); //1598
console.log(typeof(totalCartPrice)); //number
