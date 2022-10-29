import React,{useEffect,useState} from 'react'

import './App.css';

function App() {
  const [num,setNum]=useState(0)
  const [temp,setTemp]=useState(0)
  //Runs on Every Render
  // useEffect(()=>{
  //   console.log("I run on every Render");
  // })
  //Runs only on the first Render
  useEffect(()=>{
      console.log("I only run on the first render");
  },[])
  //Runs only when the given state changes in the dependency array
  // useEffect(()=>{
  //   console.log("I run when num is changed");
  // },[num])

  return (
    <div className="App">
      <button onClick={()=>{
        setNum(num+1)
      }}>Change state of Num</button>

      <button onClick={()=>{
        setTemp(temp+1)
      }}>Change state of Num</button>
    </div>
  );
}

export default App;
