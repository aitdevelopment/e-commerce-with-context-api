import './App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './route/Route'
import AccountDialog from './component/accountDialog/AccountDialog'
import { useState } from 'react'
import Home from './pages/Home/Home'
import HeroSection from './pages/Home/section/HeroSection'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
  <>
  <Toaster/>
     <AccountDialog/>
   <RouterProvider router={route}></RouterProvider>
  
  </>

  )
}

export default App
