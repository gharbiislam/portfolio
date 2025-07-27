import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className='container mx-auto px-4 sm:px-8  h-screen flex flex-col justify-center' id='home'>
      
      <p className=''>Hello, my name is</p>
      
      <h1 className='text-teal-800 text-4xl sm:text-7xl font-bold'>
        Islem Gharbi
      </h1>
      
      <h2 className='text-teal-700 text-2xl sm:text-5xl mt-2'>
        I'm a UI/UX designer and front-end developer
      </h2>
      
      <p className=' py-4 '>
        I'm a creative front-end developer and UI/UX designer from Tunisia.
        I craft clean, responsive websites and user-friendly interfaces using 
        HTML, CSS, JavaScript, and design tools. Passionate about design and 
        detail, I turn ideas into intuitive digital experiences.
      </p>
      
    
       <a href="/CV.IslemGharbi.pdf" download>
      <button className='group flex items-center text-teal-800 border-2 border-teal-800 rounded-lg font-bold px-6 py-3 w-fit hover:bg-teal-800 hover:text-white transition-all duration-300'>
        Download My Resume         <HiArrowNarrowRight className='ml-3 group-hover:translate-x-1 transition-transform duration-300' />

      </button>
    </a>  
    </div>
  )
}

export default Home
