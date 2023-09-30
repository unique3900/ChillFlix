import React from 'react'
import Navbar from './LayoutComponents/Navbar'
import Hero from './LayoutComponents/Hero'
import Main from './LayoutComponents/Main'

const App = () => {
  return (
    <div className='relative h-screen text-white bg-black w-full'>
      <Navbar />
      <Main/>
    </div>
  )
}

export default App
