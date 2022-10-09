//WAP in JS
// a.Promise
// b.Fetch
// c.Async JS

//Promise 
function product(a,b)
{
  let p=new Promise((resolve,reject)=>
  {
    if(a*b<0) reject("Product is less than 0")
    else resolve(a*b)
  });
  
  return p;
}
product(5,10)
  .then(val=>console.log(val))
  .catch(err=>console.log(err))

product(5,-10)
  .then(val=>console.log(val))
  .catch(err=>console.log(err))

//Fetch 
let value=document.querySelector('#value')
let button = document.querySelector('#button')
button.addEventListener('click',()=>{
  fetch('https://catfact.ninja/fact')
  .then(res=>res.json())
  .then(data=>
    {
      value.innerText=data.fact
    })
})

//Async 
setTimeout(()=>{
  console.log("This is a timeout of 2 sec")
},2000)
