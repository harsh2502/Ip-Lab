const fs=require('fs')

// fs.writeFile('input.txt','Hello World',(err)=>{
//   console.log("File Created")
// })

// fs.readFile('input.txt',(err,data)=>{
//   console.log(data.toString());
// })

// fs.unlink('input.txt',(err)=>{
//   console.log("File is Deleted Successfully");
// })

// fs.writeFile('input.txt','Hello World',(err)=>{
//   console.log("File Created")
// })

// fs.rename('input.txt','harsh.txt',err=>console.log("File Renamed"))

// fs.appendFile('harsh.txt',"\nHello Harsh",(err)=>console.log("Append"))

// fs.writeFile('test.txt','Hello World',(err)=>{
//   console.log("File Created")
// })

fs.readFile('test.txt',(err,data)=>{
  fs.appendFile('harsh.txt',data,(err)=>console.log("Appended Successfully"))
})


