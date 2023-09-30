
import React, { useState } from 'react'
import {
    useAuth
} from '../State/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

  const {
    user,
    login
} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("")
    try {
      await (login(email, password));
      setEmail("")
      setPassword("");
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }
 
  return (
    <>
    {user?.email && navigate('/')}
        <div className='relative h-screen w-full'>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png" className='sm:flex absolute w-full h-full object-cover' alt="bg"/>
            <div className="absolute w-full h-full bg-gradient-to-br from-black top-0 left-0"></div>

            <div className="fixed w-full px-4 py-28 z-50">
        <div className="max-w-[600px] max-h-[600px] mx-auto text-white bg-white/10 shadow-md shadow-white">
          <div className="max-w-[400px] mx-auto py-10">
            <h1 className="font-bold text-4xl">Login</h1>
            {
              error ? <p className="p-2 text-red-600 font-bold">{error.slice(9,error.length)  }</p>:""
            }
            
            <form onSubmit={(e) => {
              handleSubmit(e)
            }} className='flex flex-col gap-4 py-4'>
                <input value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }} type="email" className='px-3 py-2 border-2 border-black' placeholder='Email' />
              <input value={password} onChange={(e)=>{
                setPassword(e.target.value)
              }} type="password" className='text-black px-3 py-2 border-2 border-black' placeholder='Password' />
              <button className='text-black font-bold w-full px-2 py-4 bg-indigo-600'>Login</button>

              <Link to='/signup' className="tracking-wider flex gap-1 items-center ">Not a User? <span className='text-lg'>Login</span> </Link>
            </form>
            </div>
                </div>


            </div>


        </div>
    </>
  )
}

export default Login
