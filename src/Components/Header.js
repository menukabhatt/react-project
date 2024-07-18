import React from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className=' bg-black text-green-400 flex justify-between items-center py-2 px-4'>
      <h1 className=' text-3xl font-bold text-green-400 '>REACT.</h1>

      {/* <FaBarsStaggered className='hidden sm:flex' /> */}

      <nav className='space-x-2'>
        
        <NavLink to='/about-page' className='s-link p-4 hover:bg-gray-600'>About</NavLink>
        <NavLink to='/contact-page' className='s-link p-4 hover:bg-gray-600'>Contact</NavLink>
               
      </nav>

    </header>
  )
}

export default Header