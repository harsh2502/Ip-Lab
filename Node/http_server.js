//Normal Http Server
// const http=require('http')
// const server=http.createServer((req,res)=>{
//   res.write("Hello World");
//   res.end();
// })
// server.listen(4000)

//Sending HTML through http server
const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
  fs.readFile('index.html',(err,data)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data);
    res.end();
  })
})
server.listen(4000)