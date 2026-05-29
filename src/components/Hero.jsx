import React from 'react'
import Images1 from '../assets/images/college-1.png'
import Images2 from '../assets/images/college-2.png'
import Images3 from '../assets/images/college-3.png'
import Images4 from '../assets/images/college-4.png'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: -150}}
    whileInView={{opacity: 1, y: 0}}
    transition={{type: 'spring', stiffness: 20, damping: 5}}
    viewport={{once: true}}
    >


    <div className='w-full py-40 flex items-center justify-center flex-col h-screen'>
        <div className='container mx-auto px-6'>
            <div className='flex items-center mx-auto gap-4 border border-[#bc0101] rounded-full w-full md:w-[25%] py-2 pl-2 text-grey-500'>
                <div className='flex items-center -space-x-2'>
                    <img src={Images1} alt="college-1" className='w-8 h-8 rounded-full object-cover object-center'/>
                    <img src={Images2} alt="college-2" className='w-8 h-8 rounded-full object-cover object-center'/>
                    <img src={Images3} alt="college-3" className='w-8 h-8 rounded-full object-cover object-center'/>
                    <img src={Images4} alt="college-4" className='w-8 h-8 rounded-full object-cover object-center'/>
                </div>
                <span>Partnered by 20k Colleges</span>
            </div>
            <h1 className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mt-10'>
                <span>Bridging Students and <span className='text-[#cb2b2b]'>Institutions</span>,</span>
                <br/>
                <span>One Click at a Time</span>
            </h1>
            <p className='max-w-xl text-center mx-auto text-[24px] mt-10'>One gateway. Verified college information. Delivered directly from the institutions that know it better than anyone.</p>

            <div className='flex items-center justify-center gap-6 mt-10'>
                <button className="group relative overflow-hidden bg-[#BC0101] text-white py-3 px-6 rounded-full font-semibold cursor-pointer hover:bg-[#900101] transition-colors duration-300">
  
  {/* Default Text */}
  <span className="block transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
    Contact Me
  </span>

  {/* Hover Text */}
  <span className="absolute inset-0 flex items-center justify-center translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
    Contact Me
  </span>

</button>



                <button className="group relative overflow-hidden bg-[#150e0e] text-white py-3 px-6 rounded-full font-semibold cursor-pointer hover:bg-[#900101] transition-colors duration-300">
  
  {/* Default Text */}
  <span className="block transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
    Connect Now
  </span>

  {/* Hover Text */}
  <span className="absolute inset-0 flex items-center justify-center translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
    Connect Now
  </span>

</button>
            </div>

           

        </div>
    </div>
    </motion.div>
  )
}

export default Hero