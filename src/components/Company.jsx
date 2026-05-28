import React from 'react'
import Images1 from '../assets/images/college-1.png'
import Images2 from '../assets/images/college-2.png'
import Images3 from '../assets/images/college-3.png'
import Images4 from '../assets/images/college-4.png'
import {motion} from 'framer-motion'

const Company = () => {
  return (
    
    <div className='bg-[#fff] py-16'>
      <motion.div
    initial={{opacity: 0, x: 80}}
    whileInView={{opacity: 1, x: 0}}
    transition={{type: 'spring', stiffness: 10, damping: 5}}
    viewport={{once: true}}
    >
        <div className='container mx-auto px-6'>
            <p className= 'text-xl md:text-2xl text-center mb-16 font-medium'>Trusted By Top Colleges and Universities</p>
            <div className='flex items-center justify-center gap-10'>
                <img src={Images1} alt="college-1" className='w-[100px] h-[100px] rounded-full object-cover object-center shadow-[0_0_16px_6px_rgba(244,0,0,0.8)] hover:scale-110 transition-transform duration-300 will-change-transform transform-gpu'/>
                <img src={Images2} alt="college-2" className='w-[100px] h-[100px] rounded-full object-cover object-center shadow-[0_0_16px_6px_rgba(244,0,0,0.8)] hover:scale-110 transition-transform duration-300 will-change-transform transform-gpu'/>
                <img src={Images3} alt="college-3" className='w-[100px] h-[100px] rounded-full object-cover object-center shadow-[0_0_16px_6px_rgba(244,0,0,0.8)] hover:scale-110 transition-transform duration-300 will-change-transform transform-gpu'/>
                <img src={Images4} alt="college-4" className='w-[100px] h-[100px] rounded-full object-cover object-center shadow-[0_0_16px_6px_rgba(244,0,0,0.8)] hover:scale-110 transition-transform duration-300 will-change-transform transform-gpu'/>
            </div>
        </div>
        </motion.div>
    </div>

  )
}

export default Company