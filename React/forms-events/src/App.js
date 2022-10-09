import React from 'react'
import './App.css';
function App() {
  const [user,setUser]=React.useState("")
  const [pass,setPass]=React.useState("")
  
  let handleSubmit=(e)=>{
    console.log(user)
    console.log(pass)
    e.preventDefault()
    alert("Form Submitted Successfully")
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" onChange={(e)=>setUser(e.target.value)}></input>
          <br></br>
          <input type="password" placeholder="password" onChange={(e)=>setPass(e.target.value)}></input>
          <br></br>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
