const express=require('express')
const app=express()

app.get('/',(req,res)=>{
  res.send("Get Request")
})

app.post('/',(req,res)=>{
  res.send("Post Request")
})

app.listen(3000,()=>console.log("Server is Up and Running"))