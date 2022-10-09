//WAP in JS to study Conditional Statements,Loops and Functions

//Conditionals
//Make a greeting for good day if hours is less then 18
const hours=15
if(hours<18) console.log("Good Day")
else console.log("Bad Day")

//Loops
//Prime Number in Given Range
const n=10
for(let i=2;i<n;i++)
{
  let flag=true;
  for(let j=2;j<=i/2;j++)
  {
    if(i%j===0) flag=false;
  }
  if(flag) console.log(i);
}

//Functions
//Hello World
const hello = () => {
  console.log("Hello World")
}
hello()

