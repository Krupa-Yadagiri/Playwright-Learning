//Simple  if - validates single true condition

let a = 100;
let b = 200;

if(a<=b)
{
    console.log("condition is true")
}

/*
Validate BaseUrl 
---------------
1.test for protocol (https/http)
2.Url should not be null
3.url should be equal

String Methods
--------------
1.For equality use ===
2.for partial match includes()

*/

//test equality
let actValue = "www.google.com";
let expValue = "www.google.com";

if (actValue === expValue)
{
    console.log("value matches");
}

//test partial string

if (actValue.includes("www"))
{
    console.log("url matches");
}

//if-else - checks true or false conditions

let x = 200;
let y = 500;

if(x>=y)
{
console.log("condition is satisfied");
}
else
{
  
    console.log("condition is false");

}

//ladder if - AKS ifelseif - for multiple condition validation we use this

//student grade scenario

let marks = 80;

if(marks>=90)
{
    console.log("passed with A grade")
}
else if(marks >= 75)
{
    console.log("passed with B grade")
}
else if(marks >= 60)
{
    console.log("passed with C grade")
}
else
{
    console.log("Failed")
}


//Switch --- browser validation

let browser = "EDGE".toLowerCase()
switch(browser)
{
    case 'chrome':
    console.log("browser is matched");
    break;
    case 'edge':
    console.log("browser is matched");
    break;
        default:
        console.log("browser is not matched")
}


