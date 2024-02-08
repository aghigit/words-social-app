import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Feed from './Pages/Feed'
import Profile from './Pages/Profile'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/feed' element={<Feed/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App
