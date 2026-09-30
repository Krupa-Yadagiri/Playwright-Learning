//For loop - when you know how many times you want to repeat the same code

//print hello statements 5 times

for (let i = 1; i<=5; i++)
{
    console.log("Hello")
}

//print all even numbers upto 10

for (let i=2; i<=10; i++)
{
    if(i%2===0)
    {
      console.log(i) //2,4,6,8,10
    }
    
}


//by default condition is always true for this loop

//while loop - checks the condition first and then executes the code

let i =1; //initialization outside the loop
while(i<=5)
{
    console.log(i);
    i++
    //break;
}


/*do-while loop - best for must run once logic

it will run the code first and then checks the condition which emans it runs the logic atleast once.

*/


let d = 1;
do{
  console.log(d); //1
  d++
}
while(d<=8); //1 to 8

//Practice loops

//1. Write a while loop to find the sum of all numbers from 1 to 100.

  
//2. Create a for loop to print the multiplication table of 5 (5x1=5, 5x2=10, ... 5x10=50).
//3.Use a do-while loop to keep asking for user input until they type "quit".
// Write a loop that counts how many vowels are in a given string.
// Create a loop that reverses a number (e.g., 12345 becomes 54321).



