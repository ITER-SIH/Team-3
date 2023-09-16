import { useState } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './App.css'
import Login from './components/Login';

import Home from './components/Home';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes> 
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element = {<Login />}> </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
