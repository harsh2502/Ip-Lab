import {BrowserRouter as Router, Routes ,Route,Link } from 'react-router-dom';

import Home from './home'
import About from './about'
import Contact from './contact'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
         <Route exact path='/home' element={< Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
