import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
