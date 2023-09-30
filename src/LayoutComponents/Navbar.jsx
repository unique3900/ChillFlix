import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

      <div className="absolute p-4 w-full flex flex-row justify-between items-center z-[100]">
        {/* Logo */}
        <div className="">
          <Link to={'/'} className="font-extrabold  text-4xl  lg:text-5xl tracking-wider cursor-pointer text-white">ChillFlix</Link>
        </div>
        
        {/* Buttons */}
        <div className="flex items-center gap-3 font-bold">
          <button className='text-lg cursor-pointer'>Login</button>
          <button className='text-lg cursor-pointer px-3 py-2 bg-indigo-700 rounded-md'>Signup</button>
        </div>
      </div>

  )
}

export default Navbar
