import React from 'react'
import { movies } from '../dummy/data'
import { useNavigate } from 'react-router'


const Home = () => {
  const nav = useNavigate();
  return (
    <div className='p-5 grid grid-cols-3 gap-5'>

      {movies.map((movie) => {
        return <div key={movie.id} className='space-y-5 mb-4 shadow-xl'>
          <img src={movie.poster} className='h-[200px] w-full' alt="" />
          <div className="info p-4">
            <h1>{movie.title}</h1>
            <div className="flex justify-between">
              <p>{movie.budget}</p>
              <button onClick={() => nav('/detail-page')} className='bg-black text-white px-2 rounded-md py-1 text-sm hover:bg-pink-500'>View Details</button>
            </div>

          </div>
        </div>
      })}

    </div>
  )
}

export default Home