import './App.css';
import React from 'react'
import Temp from './components/temp'
function App() {
  const [cond,setCond] =React.useState(true)
  console.log(cond)
  return (
    <div className="App">
        {cond && <Temp/>}
        <button onClick={()=>{
          if(cond===true) setCond(false)
          else setCond(true)
        }}>Click to Toggle State</button>
    </div>
  );
}

export default App;
