import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { requestPoints } from '../Requests';
import { AiOutlinePlayCircle , AiOutlineVideoCameraAdd} from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';



const Hero = () => {

  const [movies, setMovies] = useState([]);
  const [randomNum, setRandomNum] = useState(2);
  
  const fetchData = async() => {
    const { data } = await axios.get(requestPoints.requestTrending);

    setMovies(data.results);
    console.log(data.results)
  }

  useEffect(() => {
    fetchData();

    setInterval(() => {
      const random = Math.floor(Math.random() * movies.length);
      setRandomNum(random);
    }, 10000);
  }, [randomNum])
  
  return (
    <div className='relative w-full h-[700px] '>

      {/* Overlay for image */}
      <div className="absolute w-full h-[700px] bg-gradient-to-br from-indigo-800/90 to-purple-600/30 "> </div>
      <img src={`https://image.tmdb.org/t/p/original/${movies[randomNum]?.poster_path}`} alt="" className=" w-full h-full object-cover" />


      {/* Hero Section texts and buttons */}

      {/* Texts about movie */}
      <div className="absolute w-1/2 top-[40%] left-[10%] flex flex-col gap-4">
        <h3 className="font-bold text-6xl lg:text-7xl tracking-wider">{movies[randomNum]?.title}</h3>
        <p className=" text-lg lg:text-xl">{movies[randomNum]?.overview.slice(0,260) +"....." }</p>
      </div>

      {/* Buttons */}

      <div className="absolute top-[25%] left-[10%] w-[80%] lg:w-[30%]">
        <div className="group flex justify-between items-center  border-2  border-white font-bold text-lg">
          <button className="text-black px-3 py-6 w-full bg-white group-hover:text-white group-hover:bg-transparent flex justify-center items-center gap-2">Stream Now <span><AiOutlinePlayCircle size={40}/></span> </button>
          <button className="text-white group-hover:text-black group-hover:bg-white px-3 py-6 w-full bg-transparent flex justify-center items-center gap-2">Watch later <span><AiOutlineVideoCameraAdd size={40}/></span> </button>
        </div>
      </div>


     
    </div>
  )
}

export default Hero
