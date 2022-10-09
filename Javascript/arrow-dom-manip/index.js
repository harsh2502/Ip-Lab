//WAP in JS to study arrow function,DOM manipulation and CSS Manipulations

//Arrow Function
const greet=(name)=>{
  console.log(`Hello ${name}`)
}
greet("Harsh")

//DOM Manipulation with Style
const h1= document.querySelector('.heading')
let color=true
const button = document.querySelector('.submit')
button.addEventListener('click',()=>{
  color = !color
  if(color===true) h1.style.backgroundColor="red"
  else h1.style.backgroundColor="blue"
})

//DOM Selector
const ul=document.querySelector('ul')
for(let i=0;i<3;i++)
{
  let li=document.createElement('li')
  li.innerHTML="<b>Hello</b>"
  ul.append(li)
}




