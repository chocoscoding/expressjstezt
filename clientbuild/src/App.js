import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './routes/Home';
import About from './routes/About';
import { Navbar } from './components';

function App() {

  useEffect(() => {
    (async function getdata() {

      try {
        const res = await fetch(`http://localhost:3303/api/posts`)
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  })

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
