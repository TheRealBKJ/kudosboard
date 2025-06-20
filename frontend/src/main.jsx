import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // shows homepage
import Boards from './Boards.jsx'; // shows cards
import NotFound from './NotFound.jsx' // for not found
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from "./components/Footer/Footer.jsx";


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

// for dark mode
function Root() {
  const [darkMode,setDarkMode] = useState(false)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <> {/* have to only have one compoenent so have to make div*/}
    <RouterProvider router = {router}/>
    <Footer/>
    </>
  </StrictMode>
)