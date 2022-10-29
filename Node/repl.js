const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your Choice 1.Add 2.Subtract 3.Multiply 4.Division ",(choice)=>{
    rl.question('Enter the First Number: ',(n1)=>{
        rl.question('Enter the Second Number: ',(n2)=>{
            n1=Number(n1);
            n2=Number(n2);
            if(choice==='1'){
                console.log(`Addition: ${n1+n2}`)
            }
            if(choice==='2'){
                console.log(`Subtraction: ${n1-n2}`)
            }
            if(choice==='3'){
                console.log(`Multiplication: ${n1*n2}`)
            }
            if(choice==='4'){
                console.log(`Division: ${n1/n2}`)
            }
            rl.close()
        })
    })
})


