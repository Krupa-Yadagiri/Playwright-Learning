/*Conditional Satements Program
=================================
Assignment1: 
Problem: 
Write a JavaScript program to check whether a number is even or odd. 
*/
 
let a = 4;
if(a%2 === 0)
{
    console.log("The number is even");
}
else
{
    console.log("The number is odd");
}


/*
Assignment2: 
Problem: 
Print the day of the week based on number (1–7). 
What you will use here? If-else or switch case? 
*/

let day = 6;
switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Nothing is matching with the number");
        break;
}

/*
Assignment 3: 
Problem: Write .js script that evaluates a test case result based on HTTP 
response status code the program should use Nester if..else statements to 
determine result message.  
Instructions:  
1.create a new file named testResult.js Inside the file declare variable to store 
status code Let responseCode=200;  
2.use if else Nested statements to evaluate response code and print status 
message  
3.Use the following logic for result evaluation: 
If response Code is 100-199→print: Informational  
If response Code is 200-299→print: successful  
If response Code is 300-399→print: Redirectional  
If response Code is 400-499 →print: Client Error 
If response Code is 500-599→print: Server Error 
For any other code →print Unkown Status code  
4.Run script using node testResult.js  
*/


/*
Assignment 4
Problem:  Write a script that suggests what clothing to wear based on the 
current temperature The program should use if...else or if...else if statements to 
determine the suggestion.  
Instructions: 1. Create a new file named weather.js. Inside the file, declare a 
variable to store the temperature,  
for example: let temperature = 28;  
2. Use if...else or if...else if statements to decide and print the clothing 
suggestion based on the temperature 
3. Use the following logic for clothing suggestion:  
If temperature is above 35°C Print: wear light cotton clothes  
◦ If temperature is between 20°C and 35°C Pint: Normal casual wear  
○ If temperature is between 10°C and 19°C Print: Wear a jacket  
○ If temperature is below 10°C Print: stay indoors, it's too cold! Run the script 
using: node weather.js  
Test Cases to Try: • temperature = 40 • temperature = 28 . temperature- 15  

Assignment5:  
Problem: Create a Javascript that checks whether the given username and 
password match the predefined login credentials using simple variables 
Instructions:  
1. Greate a new file named login.js.  
2. Inside the file, do the following: Declare two variables for user input: let 
enteredUsername = "Priyanka"; // Keep changing  
let enteredPassword = "Nigade":;//Keep changing (Change "some _ value" to 
simulate different test cases.)  
Declare two predefined credentials:  
const correctusername = "admin@emalil.com",  
const correctPassword = "admin@123";  
3. Use an if...else statement to compare: If both enteredusername and 
enteredPassword match the correct credentials, print: Login Successful 
Otherwise, print: Invalid credentials Run the script using: node login.js


Loop Assignments
========================
1.Prime Number
Problem Statement:
Write a JavaScript program to check whether a given number is prime or not using a loop.
*/

let number = 5;
for(let i = 2; i<number; i++)
{
    if(number%i===0)
    {
        console.log("The given number is not Prime");
        //break;
    }
    else{
        console.log("The given number is Prime");
        break;
    }

}

/*

2.Print Even Numbers
Problem Statement:
Write a JavaScript program to print all even numbers between 1 and 50 using a loop.

*/
for(let i = 1; i<=50; i++)
{
    if(i%2===0)
    {
        console.log(i)
    }
}

/*

3.Multiplication Table
Problem Statement:
Write a JavaScript program that accepts a number and prints its multiplication table from 1 to 10.

*/

let table = 2;
for(let i = 1; i<=10; i++)
{
    console.log(table + "X" + i + "=" + (table*i));
}

/*
4.Factorial Number
Problem Statement:
Write a JavaScript program to calculate the factorial of a given positive integer using a loop.
*/
 let n = 5;
 let factorial = 1;
 for (let i = 1; i<=n; i++)
 {
    factorial = factorial * i;
 }

 console.log("Factorial of a given number is " + factorial);

/*
5.Count Digits
Problem Statement:
Write a JavaScript program to count the total number of digits present in a given number using a loop.

*/
let x = 12345;
let count = 0;

while (x > 0) {
    count++;
    x = Math.floor(x / 10);
}

console.log("Total number of digits: " + count);

/*
6.Stop the Loop at a Specific Number
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10.
*/

for (let i = 1; i <= 20; i++) {
    console.log(i);

    if (i === 10) {
        break;
    }
}

/*
7.Skip Even Numbers
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.

*/
for (let i = 1; i <= 20; i++) {
    
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);

}

/*
8.Print a 5 × 5 Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
*****
*****
*****
*****
*****
*/

for(let r = 1; r<=5; r++)
{
    row = "";
    for(let c= 1; c<=5; c++)
    {
        row = row + "*"
    }
    console.log(row);
}
/*

9.Decreasing Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print the following pattern:

*****
****
***
**
*
*/



/*

10.Palindrome Number
Problem Statement:
Write a JavaScript program to check whether a given number is a palindrome.
Input: 121
Output: 121 is palindrome number

*/

let num = 121;
let rev = 0, rem = 0;
while(num>=0)
{
    rem = num%10;
    num = Math.floor(num/10);
    rev = rev * 10 + rem;
}
console.log("121 is a Pallindrome Number");