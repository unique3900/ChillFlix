import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext, { useAuth } from '../State/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout =async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.log(error)
    }
  }
  return (

      <div className="absolute p-4 w-full flex flex-row justify-between items-center z-[100]">
        {/* Logo */}
        <div className="">
          <Link to={'/'} className="font-extrabold  text-4xl  lg:text-5xl tracking-wider cursor-pointer text-white">ChillFlix</Link>
        </div>
        
      {/* Buttons */}
      
      {
        user?.email ? <div className="flex items-center gap-3 font-bold">
    
        <Link to={'/watchlist'} className='text-lg cursor-pointer'>Watchlist</Link>
        <button onClick={handleLogout}  className='text-lg cursor-pointer px-3 py-2 bg-indigo-700 rounded-md'>Logout</button>
      </div>  : (
          <div className="flex items-center gap-3 font-bold">
    
          <Link to={'/login'} className='text-lg cursor-pointer'>Login</Link>
          <Link to={'/signup'} className='text-lg cursor-pointer px-3 py-2 bg-indigo-700 rounded-md hover:bg-opacity-70 duration-150'>Signup</Link>
        </div>
        )
      }

      </div>

  )
}

export default Navbar
