import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='py-20 bg-[#fff] flex items-center justify-center flex-col h-full'>

        <motion.div
    initial={{opacity: 0, y: -150}}
    whileInView={{opacity: 1, y: 0}}
    transition={{type: 'spring', stiffness: 20, damping: 5}}
    viewport={{once: true}}
    >
        <div className='container mx-auto px-[40px] py-[65px] border-2 border-[#e1e1e1] rounded-2xl'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl mb-6'>Reach Out To Us</h1>
                <p className='max-w-2xl mx-auto text-xl mt-4 text-[#675b5b]'>Reach Out to Us We are always here to help you find the right college.</p>
            </div>

            {/* Contact Form */}
            <div className='max-w-2xl mx-auto'>
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label htmlFor='name' className='block text-lg font-medium text-[#333] mb-2'>Name</label>
                            <input type='text' id='name' placeholder='Your Name' className='border border-[#ccc] w-full rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-red-500' />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-lg font-medium text-[#333] mb-2'>Email</label>
                            <input type='email' id='email' placeholder='Your Email' className='border border-[#ccc] w-full rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-red-500' />
                        </div>
                        <div className='md:col-span-2'>
                            <label htmlFor='message' className='block text-lg font-medium text-[#333] mb-2'>Enter Your Message</label>
                            <textarea id='message' rows='4' placeholder='Message' className='border border-[#ccc] w-full rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-red-500 min-h-[200px]'></textarea>
                        </div>
                        <button className='group relative overflow-hidden bg-[#bc0101] text-white py-3 px-8 rounded-full font-semibold cursor-pointer w-[60%] hover:bg-[#900101] transition-colors duration-300'>
  
  {/* Default Text */}
  <span className='block transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0'>
    Send Message
  </span>

  {/* Hover Text */}
  <span className='absolute inset-0 flex items-center justify-center translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
    Send Message
  </span>

</button>
                    </div>
                </form>
            </div>
        </div>
    
    </motion.div>
    </div>
  )
}

export default Contact