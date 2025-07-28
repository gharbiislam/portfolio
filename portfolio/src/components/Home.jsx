import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div className='dark:bg-slate-900 bg-white scroll-mt-20'   id='home'>
      <div
        className='container mx-auto px-4 sm:px-8 h-screen flex flex-col justify-center'
     
      >
        <p className='text-gray-700 dark:text-white text-lg'>Hello, my name is</p>

        <h1 className='text-teal-800 dark:text-white text-4xl sm:text-7xl font-bold'>
          Islem Gharbi
        </h1>

        <h2 className='text-teal-700 dark:text-teal-300 text-2xl sm:text-5xl mt-2 font-semibold'>
          I'm a UI/UX designer and front-end developer
        </h2>

        <p className='text-gray-800 dark:text-gray-300 py-6 max-w-3xl leading-relaxed'>
          I'm a Communication Multimedia student with a strong interest in UI/UX design and front-end
          development. I’m passionate about creating smooth, user-friendly digital experiences that
          combine creativity with clarity.
        </p>

        {/* Skills Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 '>
           <div className='bg-gray-200  dark:bg-slate-800 p-4 rounded-lg shadow-md w-full '>
            <h3 className='text-teal-700 dark:text-teal-300 font-bold mb-2'> Development</h3>
            <p className='text-base dark:text-white'>
             HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React.js, PHP, MySQL
            </p>
          </div>

         <div className='bg-gray-200  dark:bg-slate-800 p-4 rounded-lg shadow-md w-full'>
            <h3 className='text-teal-700 dark:text-teal-300 font-bold mb-2'>Graphic Design</h3>
            <p className='text-base dark:text-white'>
            Figma,  Adobe Illustrator, Adobe Photoshop, Adobe Premiere Pro, After Effects
            </p>
          </div>
        </div>

        {/* Resume Button */}
        <a href='/CV.IslemGharbi.pdf' download>
          <button className='group flex items-center text-teal-800  border-2 border-teal-800 rounded-lg font-bold px-6 py-3 w-fit hover:bg-teal-800 hover:text-white transition-all duration-300'>
            Download My Resume
            <HiArrowNarrowRight className='ml-3 group-hover:translate-x-1 transition-transform duration-300' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
