import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Boards from './pages/Boards';
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx"

// fetching data in list components  to let app handle routing and layout
//have to wrap app in routs to allow routing, header and footer can go outside bc on every page
function App() {

  return (
    <div>
  
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<Boards />} />

      </Routes>

      <Footer/>
      {/* Footer can go outside of Router Because all pages use it*/}
    </div>
  );
}


export default App
