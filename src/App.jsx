import React from 'react'
import Navbar from './LayoutComponents/Navbar'
import Hero from './LayoutComponents/Hero'
import Main from './LayoutComponents/Main'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import WatchList from './Pages/WatchList'

const App = () => {
  return (
    <div className='relative h-screen text-white bg-black w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/watchlist' element={ <WatchList/>} />
      </Routes>
    </div>
  )
}

export default App
