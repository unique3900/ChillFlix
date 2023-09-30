import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from '../LayoutComponents/Movie';

const ListSection = ({ id, title, url }) => {
    const [movies, setMovies] = useState([]);
    
    const fetchData = async () => {
        const { data } = await axios.post(url);
        console.log(data.results);
        setMovies(data.results);
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    
  return (
      <>
          <div className="py-5 px-3 bg-black">
              <h2 className="text-4xl">{title}</h2>

              <div className=" relative w-full flex flex-col flex-nowrap justify-center items-center gap-2 mx-auto py-4 px-4 lg:px-14 tracking-widest" >
                  <div  className='scrollbar-hide scroll-smooth '>
                      {
                          movies.slice(0,12)?.map((item, index) => (
                            <Movie index={index} item={item}/>
                          ))
                      }
                  </div>
              </div>
          </div>
      
    </>
  )
}

export default ListSection
