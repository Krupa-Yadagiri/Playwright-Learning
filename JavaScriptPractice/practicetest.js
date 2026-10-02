let a =5;
console.log(++a); //6 

let i =1 ;
while(i<=3)
{
    console.log(i);
    i++;
}

for (let i = 1; i<=5; i++)
{
    if(i==3)
        break;
    console.log(i);
}

let num = 0; //falsy value
if(num)
{
    console.log("true")
}
else{
    console.log("false")
}

console.log(NaN===NaN); //NaN as not equal to itself.

console.log(1<2<3);

console.log(Boolean("false"));

console.log("5" + + "5");

console.log(5 + "5" - 5);

let x  = 10;

function test()
{
    console.log(x);
    var x = 20.
}
test();

//sum of digits

let p = 1;
let result = 0;

while(p<=100)
{
  result = result + p; //
  p++; //2
}
console.log("Sum of 100 natural numbers is: " + result); //5050