import React from 'react'
import { Fa0, FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
   
    <div className='pt-20 pb-12 '>
         <motion.div
    initial={{opacity: 0, y: 80}}
    whileInView={{opacity: 1, y: 0}}
    transition={{type: 'spring', stiffness: 10, damping: 5}}
    viewport={{once: true}}
    >
        <div className='container mx-auto text-center px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

                {/* Left */}
                <div className='mb-4 text-left'>
                    <span className='text-[20px] font-medium'>Make <span className='text-[#bc0101] font-bold text-[24px]'>MY</span> Web</span>
                <div className='w-4 h-4 bg-red-500 rounded-full ml-3'>
                </div>
                <p className='mb-4 mt-4'>Empowering students with trusted and verified college information from across India, helping them make confident career decisions.</p>
                <div className='flex items-center gap-8 py-2 font-semibold text-[15px]'>
                    <a href="#Home" className='text-[#bc0101] hover:underline'>Home</a>
                    <a href="#About" className='text-[#bc0101] hover:underline'>About</a>
                    <a href="#Services" className='text-[#bc0101] hover:underline'>Services</a>
                    <a href="#Contact" className='text-[#bc0101] hover:underline'>Contact</a>
                </div>
                </div>

                {/* Right */}
                <div className='text-left'>
                    <h2 className='text-xl font-semibold mb-3'>Subscribe to our newsletters.</h2>
                    <p className='text-sm'>Subscribe to get the latest college admission updates, verified information, and career guidance directly in your inbox.</p>
                    <div className='flex flex-col md:flex-row items-start gap-2 mt-4'>
                        <input className='w-full px-4 py-3 border border-[#aeaeae] rounded outline-none text-[15px]' type="text" placeholder='Enter Your Email' />
                        <button className='group relative overflow-hidden bg-[#bc0101] text-white py-3 px-6 rounded cursor-pointer hover:bg-[#900101] transition-colors duration-300'>
  
  {/* Default Text */}
  <span className='block transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0'>
    Subscribe
  </span>

  {/* Hover Text */}
  <span className='absolute inset-0 flex items-center justify-center translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
    Subscribe
  </span>

</button>
                    </div>
                </div>
            </div>

            <div className='border-t border-[#aeaeae] mt-6 flex flex-col md:flex-row items-start gap-6 justify-between pt-6'>
                <p className='text-dark'>Copyright 2026 © Make <span className='text-[#bc0101] font-bold text-[18px]'>MY</span> Web. All rights reserved.</p>
                <div className='flex items-center gap-4 text-[26px] text-[#bc0101]'>
                    <FaFacebook className='cursor-pointer hover:scale-110 transition-transform duration-300'/>
                    <FaTwitter className='cursor-pointer hover:scale-110 transition-transform duration-300'/>
                    <FaInstagram className='cursor-pointer hover:scale-110 transition-transform duration-300'/>
                    <FaLinkedin className='cursor-pointer hover:scale-110 transition-transform duration-300'/>
                    <FaGoogle className='cursor-pointer hover:scale-110 transition-transform duration-300'/>
                </div>
            </div>
        </div>
        </motion.div>
    </div>
   
  )
}

export default Footer