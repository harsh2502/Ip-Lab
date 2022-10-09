//WAP in JS
// a.Promise
// b.Fetch
// c.Async JS

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
