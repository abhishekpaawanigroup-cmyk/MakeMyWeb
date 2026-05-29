import React from 'react'
import Images1 from '../assets/images/college-1.png'
import Images2 from '../assets/images/college-2.png'
import Images3 from '../assets/images/college-3.png'
import Images4 from '../assets/images/college-4.png'
import {motion} from 'framer-motion'

const cards = [
    {
        id: 1,
        title: 'College Information',
        description: 'We provide verified and trusted information about every partnered college, helping students make informed decisions with confidence.',
        image: Images1
    },
    {
        id: 2,
        title: 'No Middleman',
        description: 'We connect students directly with colleges, eliminating the need for intermediaries and ensuring a seamless experience.',
        image: Images2
    },
    {
        id: 3,
        title: 'Placement Details',
        description: 'Know about top recruiters, average packages, placement percentages, and career opportunities to choose the right college with confidence.',
        image: Images3
    },
    {
        id: 4,
        title: 'Admissions Help',
        description: 'Confused about admissions? We\'ve got you covered. Get all the information you need to apply to your dream college. Simple, clear and stress-free.',
        image: Images4
    }
]

const Services = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: -150}}
    whileInView={{opacity: 1, y: 0}}
    transition={{type: 'spring', stiffness: 20, damping: 5}}
    viewport={{once: true}}
    >
    <div className='py-20 flex items-center justify-center h-screen'>
        <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
            <div className='text-center mb-16'>
                <h1 className='text-[36px]'>How We Can Help You?</h1>
                <p className='text-[18px] mt-[20px] text-[#675b5b]'>Plans Built for Students Basic info for free. Full college connect for those who want more. <br/>Either way, we have got you covered.</p>
            </div>

            {/* Service Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

                {cards.map((card) => (
                   <div className="relative p-[1.5px] rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 object-cover will-change-transform transform-gpu cursor-pointer border-2 border-transparent">
  
  {/* Moving Gradient Border */}
  <div className="absolute inset-0 bg-[linear-gradient(90deg,#f90000,#ffcd00,#33ffd1,#ff1515)] bg-[length:300%_300%] animate-gradient rounded-2xl"></div>

  {/* Card Content */}
  <div
    className="relative flex bg-[#f7f7f7] p-12 rounded-2xl  h-full flex-col md:flex-row items-center gap-6"
    key={card.id}
  >
    <div className="w-[100px] h-[100px]">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full rounded-full object-cover object-center"
      />
    </div>

    <div className="max-w-[70%]">
      <h2 className="text-[24px] font-bold mb-4">
        {card.title}
      </h2>

      <p className="text-[16px] text-[#675b5b]">
        {card.description}
      </p>
    </div>
  </div>
</div>))}


               
                
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Services