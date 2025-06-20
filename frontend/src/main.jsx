import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // shows homepage
import Boards from './Boards.jsx'; // shows cards
import NotFound from './NotFound.jsx' // for not found
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from "./components/Footer/Footer.jsx";
import { useState, useEffect } from 'react';

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

function ColorWrap() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);


  return (
    <div>
      <button
        className='toggle-button'
        onClick={() => setDarkMode(prev => !prev)}
      >
        Switch Themes(Dark or Light)
      </button>
      <RouterProvider router={router} />
      <Footer />

    </div>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <> {/* have to only have one compoenent so have to make div*/}
      <ColorWrap/>
    </>
  </StrictMode>
)