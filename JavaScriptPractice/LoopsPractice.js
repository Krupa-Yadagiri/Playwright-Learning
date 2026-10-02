/*Practice Exercises
Try these on your own to get comfortable with all three loop types:
1. Write a while loop to find the sum of all numbers from 1 to 100.
2. Create a for loop to print the multiplication table of 5 (5x1=5, 5x2=10, ... 5x10=50).
3. Use a do-while loop to keep asking for user input until they type "quit".
4. Write a loop that counts how many vowels are in a given string.
5. Create a loop that reverses a number (e.g., 12345 becomes 54321).

*/

//1. Write a while loop to find the sum of all numbers from 1 to 100.

let x = 1; 
let result = 0;
while(x<=100)
{
  result = result + x ;
  x++;
}
console.log("The sum of all numbers from 1 to 100 is: " + result); //5050

//2. Create a for loop to print the multiplication table of 5 (5x1=5, 5x2=10, ... 5x10=50)

console.log("The Multiplication table of 5");
for (let i = 1; i<=10; i++)
{
   //console.log("The multiplication table of 5");
   console.log("5"+ " X " + i + " = " + (5*i));
}

//3. Use a do-while loop to keep asking for user input until they type "quit".

/*let userInput;
do{
    userInput = console.readline("Enter Something");
    
}
while(userInput != "quit");
*/

//4. Write a loop that counts how many vowels are in a given string.

let cityName = "Hyderabad";
let count = 0;
for(i=0; i<cityName.length; i++)
{
    if(cityName[i] === "a" || cityName[i] === "e" || cityName[i] === "i" || cityName[i] === "o" || cityName[i] === "u")
    {
        count++;
    }
}
console.log("The number of vowels in the given string " + count);

//5. Create a loop that reverses a number (e.g., 12345 becomes 54321).

let number = 12345, rev = 0, rem = 0;
while(number>0)
{
    rem = number%10; //result of reminder left after division
    number = Math.floor(number/10); //result of division
    rev = rev * 10 + rem;
    
}
console.log("The reverse of given number is " + rev);


