import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const Movie = ({ index, item }) => {
    const [liked, setLiked] = useState(false);
  return (
    <div key={index} className="group  w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] object-cover cursor-pointer relative inline-block">
    <img src={"https://image.tmdb.org/t/p/original/" + item.backdrop_path} alt="" />


    {/* Overlay to display title of movie on hover */}
          <div className="absolute h-full flex flex-col gap-2 items-center justify-center  w-full bg-black/70 top-0 left-0 opacity-0 hover:opacity-100">
             
              {liked? <AiFillHeart size={35} className='absolute top-1 left-1 text-white'/> : <AiOutlineHeart  size={35}className='absolute top-1 left-1 text-white'/>}
              
              <h4 className="font-bold text-xs lg:text-sm ">{item.title.length>20 ? item.title.slice(0,20)+"..":item.title}</h4>
              <p className="">Vote: {item.vote_count }</p>
            
              
    </div>
</div>
  )
}

export default Movie
