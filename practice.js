const readline=require('readline')
const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

rl.question("Enter 1st Number ",(n1)=>{
  rl.question("Enter 2nd Number ",(n2)=>{
    n1=Number(n1)
    n2=Number(n2)
    console.log(n1+n2)
  })
})

