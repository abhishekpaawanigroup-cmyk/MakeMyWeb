import React from 'react'
import { FaArrowRightLong, FaBars, FaXmark } from 'react-icons/fa6'
const { useState } = React


const Navbar = () => {
  const[showMenu, setShowMenu]= useState(false)

  return (
    <div className='w-full fixed top-0 z-50 backdrop-blur-sm'>
        <div className='flex w-full justify-evenly py-3 items-center max-sm:justify-between max-sm:px-[10px]'>
            {/* Left-side */}
            <div>
                <span className='text-[20px] font-medium'>Make <span className='text-[#bc0101] font-bold text-[24px]'>MY</span> Web</span>
                <div className='w-4 h-4 bg-[#bc0101] rounded-full ml-3'></div>
            </div>
            {/* Middle */}
            <div className='hidden md:flex items-center space-x-6 font-medium gray-600'>
                <a href='#Home'>Home</a>
                <a href='#About'>About</a>
                <a href='#Services'>Services</a>
                <a href='#Contact'>Contact</a>
            </div>
            {/* Right-side */}
            <div className='hidden md:block'>
  <button className='group relative overflow-hidden flex items-center justify-center bg-[#bc0101] px-6 py-2 rounded-[22px] text-white cursor-pointer hover:bg-[#900101] transition-colors duration-300'>
    
    {/* Default Content */}
    <span className='flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0'>
      Contact Me
      <FaArrowRightLong />
    </span>

    {/* Hover Content */}
    <span className='absolute inset-0 flex items-center justify-center gap-2 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
      Contact Me
      <FaArrowRightLong />
    </span>

  </button>
</div>

            {/* Mobile Version */}
            <div className='text-[20px] md:hidden cursor-pointer z-10 px-4'>
                {showMenu ? (
                    <FaXmark onClick={() => setShowMenu(!showMenu)}/>
                ) : (
                    <FaBars onClick={() => setShowMenu(!showMenu)}/>
                )}
            </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
            <div className='md:hidden py-4 text-center font-medium fixed w-[60%] top-0 right-0 bg-[#ff00009c] h-screen pt-[70px]'>
                <a onClick={() => setShowMenu(!showMenu)} href='#' className='block py-2 px-4 bg-[#fff]'>Home</a>
                <a onClick={() => setShowMenu(!showMenu)} href='#' className='block py-2 px-4 '>About</a>
                <a onClick={() => setShowMenu(!showMenu)} href='#' className='block py-2 px-4 '>Services</a>
                <a onClick={() => setShowMenu(!showMenu)} href='#' className='block py-2 px-4 '>Contact</a>
            </div>
        )}
    </div>
  )
}

export default Navbar