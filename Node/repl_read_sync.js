/*
1.npm init -y
2.npm i readline-sync
3.node file_name.js
*/

const readLine = require("readline-sync");
console.log("Select Operations");
console.log("enter 1 for add");
console.log("enter 2 for substract");
console.log("enter 3 for multiply");
console.log("enter 4 for divide");
let c = Number(readLine.question());
console.log("Enter first number");
let a = Number(readLine.question());
console.log("Enter second number");
let b = Number(readLine.question());

console.log(a);
console.log(b);
if(c==1){
    console.log("Addition");
    console.log(a+b);
}
else if(c==2){
    console.log("Substraction");
    console.log(a-b);
}
else if(c==3){
    console.log("Multiply");
    console.log(a*b);
}
else if(c==4){
    console.log("Divide");
    console.log(a/b);
}
else(
    console.log("operation invalid")
)