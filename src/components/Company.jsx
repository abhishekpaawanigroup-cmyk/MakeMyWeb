import React from 'react'
import Images1 from '../assets/images/college-1.png'
import Images2 from '../assets/images/college-2.png'
import Images3 from '../assets/images/college-3.png'
import Images4 from '../assets/images/college-4.png'
import {motion} from 'framer-motion'

const Company = () => {
  return (
    
    <div className='bg-[#fff] py-16 flex items-center justify-center flex-col gap-10 h-full overflow-x-scroll overflow-y-hidden'>
      <motion.div
    initial={{opacity: 0, y: 150}}
    whileInView={{opacity: 1, y: 0}}
    transition={{type: 'spring', stiffness: 20, damping: 5}}
    viewport={{ once: true, amount: 0.2 }}
    className='flex items-center justify-center gap-[64px] flex-col'
    >
       {/* Image */}
                  <div className='w-[60%] mx-auto mt-20 rounded-2xl flex justify-center gap-3 items-center'>
                      <div className='perspective-[1000px] w-[50%]'>
                          <div className='absolute inset-0 bg-gradient-to-r from-[#b9a1a1] to-transparent blur-3xl scale-110'></div>
                      <img src={Images4} alt="college-1" className='w-full h-full  rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.7)]'
                       style={{ transform: 'rotateY(30deg) rotateX(0deg) translateZ(30px)'}}/>
                      </div>
                      <div className='perspective-[1000px] w-[50%] ml-[-50px]'>
                          <div className='absolute inset-0 bg-gradient-to-r from-[#b9a1a1] to-transparent blur-3xl scale-110'></div>
                      <img src={Images1} alt="college-1" className='w-full h-full  rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,82%)] '
                       style={{ transform: 'rotateY(-24deg) rotateX(0deg) translateZ(100px)'}}/>
                      </div>
                  </div>


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