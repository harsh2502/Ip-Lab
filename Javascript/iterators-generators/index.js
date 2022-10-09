//WAP on inheritance,iterators and Generators

//Inheritance
class Parent{
  constructor(name){
    this.name=name
    console.log("In Parent Constructor")
  }
  
}
class Child extends Parent{
  constructor(name){
    super(name)
    console.log("In Child Constuctor")
  }
  getName(){
    console.log(`Hello ${this.name}`)
  }
  setName(name){
    this.name=name
  }
}

const obj=new Child("Harsh")
obj.getName()
obj.setName("Sam")
obj.getName()



//Iterators
let nums = [1,2,3,4,5]
//for...of
console.log("Values")
for(let i of nums) console.log(i)

//for...in
console.log("Index")
for(let i in nums) console.log(i)

//forEach
console.log("forEach")
nums.forEach(element => {
  console.log(element**2)
});

//Iterators using Symbol.iterator
console.log("Iterators")
let iter=nums[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

//Generators
console.log("Generators")
function *getNums(){
  yield 1
  yield 2
  yield 3 
  yield 4
  yield 5
}
let genIter=getNums()
console.log(genIter.next())
console.log(genIter.next())
console.log(genIter.next())
console.log(genIter.next())
console.log(genIter.next())