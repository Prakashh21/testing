import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
