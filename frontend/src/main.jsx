import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, }  from "react-router-dom"
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import App from './App'
import Contactme from './Components/Contactme/Contactme'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='home' element={<Hero />} /> 
      <Route path='contactme' element={<Contactme />} />
      <Route path='projects' element={<Projects />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router} />
  </React.StrictMode>
);
