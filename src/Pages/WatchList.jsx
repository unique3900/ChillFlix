import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { requestPoints } from '../Requests'
import { useAuth } from '../State/AuthContext'
import { useNavigate } from 'react-router-dom'
import { arrayRemove, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { RiDeleteBin5Line } from 'react-icons/ri';
const WatchList = () => {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  
  const handleDelete = async (id) => {
    try {
      const ref = doc(db, "users", user?.email);
      const filterData = movies.filter((item) => item.id != id);
      await updateDoc(ref, {
        watchlist:filterData
      })
    } catch (error) {
      console.log(error)
    }
    
  }


  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      console.log(doc.data()?.watchlist)
      setMovies(doc.data()?.watchlist);
    })
  }, [user?.email])
  
  return (
    <>
      
    {!user?.email && navigate('/')}

      {/* Top Section */}
      <div className="relative h-[600px] w-full">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png" className='w-full h-[600px]' alt="" />

        {/* Background Overlay */}

        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black/80 to-pink-500/20">
        </div>
        <h2 className="absolute top-[30%] left-[5%] text-6xl tracking-widest">Your Watchlist</h2>
      </div>

      {/* Below Listing Section */}

      <div className=" p-5 flex flex-col gap-4 h-[600px] overflow-scroll scrollbar-hide scroll-smooth bg-black">
        <h2 className="text-3xl font-bold text-center">Watchlist</h2>
        <div className="w-full  grid grid-flow-row  grid-cols-2 lg:grid-cols-[2fr_2fr_2fr]">

          {
            movies.map((item, index) => (
              <div className="relative group cursor-pointer" key={index}>
                <img src={"https://image.tmdb.org/t/p/original/" + item.image} className='' alt="" />
                
                <div className="absolute w-full h-full  top-0 left-0 bg-black/70 hidden group-hover:flex items-center justify-center">
                  <p className="font-bold text-lg">{item.title}</p>
                  
                  
                </div>

                <div className="absolute bottom-0 right-1 text-white">
                  <RiDeleteBin5Line onClick={() => {
                    handleDelete(item.id)
                }} className='hover:text-red-600/80' size={30}/>
                </div>
             </div>
           )) 
          }
        </div>

      </div>
    </>
  )
}

export default WatchList
