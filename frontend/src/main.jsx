import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Boards from './pages/Boards.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/board-detials',
    elemnt: <Boards/>
  }
])
=======
import App from './App.jsx' // shows homepage
import Boards from './Boards.jsx'; // shows cards
import NotFound from './NotFound.jsx' // for not found
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from "./components/Footer/Footer.jsx";
>>>>>>> frontend


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // main page default going to be app that shows boards
    errorElement: <NotFound />
  },
  {
    path: '/boards/:id', // direct to individual boards page, :id for param for fetch requests
    element: <Boards />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <> {/* have to only have one compoenent so have to make div*/}
    <RouterProvider router = {router}/>
    <Footer/>
    </>
  </StrictMode>
)
