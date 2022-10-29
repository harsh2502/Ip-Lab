const fs=require('fs');

//Create and Writing
fs.writeFile('input.txt','Hello World',(err)=>{
    if(err){
        console.log("Error")
    }
    console.log("Done")
})

//Read
fs.readFile('input.txt',(err,data)=>{
    if(err){
        console.log("Error")
    }
    console.log(data.toString())
})

//Update 
fs.appendFile('input.txt','\nHello Mumbai',(err)=>{
    if(err){
        console.log("Error")
    }
    console.log("File Updated Successfully")
    fs.readFile('input.txt',(err,data)=>{
        console.log("Contents of the File is")
        console.log(data.toString())
    })
}) 

//Delete
fs.writeFile('output.txt','Hello World',(err)=>{
    if(err){
        console.log("Error")
    }
    console.log("Done")
})

fs.unlink('output.txt', (err) => {
    if(err){
        console.log("Error")
    }
    console.log('File was deleted successfully');
})


//Rename
fs.rename('hello.txt','input.txt',()=>{
    console.log("File Renamed Successfully")
})

