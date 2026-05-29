import React from 'react'
import Images1 from '../assets/images/college-1.png'
import Images2 from '../assets/images/college-2.png'
import Images3 from '../assets/images/college-3.png'
import Images4 from '../assets/images/college-4.png'
import {motion} from 'framer-motion'

const works = [
    {
        id: 1,
        title: 'Colleges Partnered',
        description: 'We have successfully partnered with 50+ colleges across India, bringing verified information directly to students.',
        image: Images1
    },
    {
        id: 2,
        title: 'Students Helped',
        description: 'Over 10,000 students have used our platform to find the right college and make confident admission decisions.',
        image: Images2
    },
    {
        id: 3,
        title: 'Cities Covered',
        description: 'Our college network spans across 15+ cities in India, growing every day with new institutional partnerships.',
        image: Images3
    }
]

const Work = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: 150}}
    whileInView={{opacity: 1, y: 0}}
    transition={{type: 'spring', stiffness: 20, damping: 5}}
    viewport={{once: true}}
    >
    <div className='py-20 flex items-center justify-center flex-col gap-10 h-screen'>
        <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl md:text-5xl'>Our Latest Work</h1>
                <p className='max-w-2xl mx-auto text-xl mt-4 text-[#675b5b]'>Our Latest Work Every project is a step closer to connecting more students with their dream colleges</p>
            </div>

            {/* Work Sections */}

            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {works.map((work) => (
                    <div className='rounded-xl overflow-hidden bg-[#fff] hover:scale-105 transition-transform duration-300 cursor-pointer object-cover will-change-transform transform-gpu' key={work.id}>
                        <img src={work.image} alt={work.title} className='w-full h-[250px]' />
                        <div className='mt-6 p-6'>
                            <h1 className='text-xl font-semibold'>{work.title}</h1>
                            <p className='mt-4'>{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </motion.div>
        
  )
}

export default Work