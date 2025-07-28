import React, {useEffect, useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import Logo from '../assets/logo.png';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (

<div className='fixed w-full h-[80px] bg-teal-800 text-[#E3F8F4] flex justify-center items-center z-50 shadow-md'>
      {/* Logo */}
      <div className='container  px-4 sm:px-8 flex justify-between items-center '>
      <div>
        <img src={Logo} alt="logo" className='w-[50px]' />
      </div>

      {/* Desktop Nav */} <div className='flex items-center'>
      <ul className='hidden md:flex space-x-6'>
        <li className='cursor-pointer text-l hover:font-bold'><a href="#home">Home</a></li>
        <li className='cursor-pointer text-l hover:font-bold'><a href="#services">Services</a></li>
        <li className='cursor-pointer text-l hover:font-bold'><a href="#projects">Projects</a></li>
        <li className='cursor-pointer text-l hover:font-bold'><a href="#contact">Contact</a></li>  
         {/* Dark mode button */}
        
      </ul>
      <div onClick={()=> setIsDarkMode(prev =>!prev)} className='cursor-pointer ml-6 '>
               {isDarkMode ? <HiOutlineSun size={26} /> : <HiOutlineMoon size={26} />}
 
        </div>
            {/* Hamburger */}
      <div onClick={toggleNav} className='md:hidden z-10 cursor-pointer ml-6'>
        {nav ? <FaTimes size={26}/> : <FaBars size={26} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${nav ? 'absolute' : 'hidden'} top-0 left-0 w-full h-screen bg-teal-900 flex flex-col justify-center items-center`}>
        <li className='py-6 text-xl' ><a href="#home">Home</a></li>
        <li className='py-6 text-xl'><a href="#services">Services</a></li>
        <li className='py-6 text-xl'><a href="#projects">Projects</a></li>
        <li className='py-6 text-xl'><a href="#contact">Contact</a></li> 
        
      </ul>

        </div>
     

  
      

      {/* Social Icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='bg-teal-900 w-[160px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-300 mb-1 flex justify-between items-center'>
            <a href="https://www.linkedin.com/in/islem-gharbii/" className='flex justify-between items-center text-[#E3F8F4] w-full'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='bg-teal-900 w-[160px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-300 mb-1 flex justify-between items-center'>
            <a href="https://www.behance.net/islemgharbi1" className='flex justify-between items-center text-[#E3F8F4] w-full'>
              Behance <FaBehance size={30} />
            </a>
          </li>
          <li className='bg-teal-900 w-[160px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-300 mb-1 flex justify-between items-center'>
            <a href="mailto:gharbiislem14@gmail.com" className='flex justify-between items-center text-[#E3F8F4] w-full'>
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='bg-teal-900 w-[160px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-300 mb-1 flex justify-between items-center'>
            <a href="https://github.com/gharbiislam" className='flex justify-between items-center text-[#E3F8F4] w-full'>
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div></div>
  );
};

export default Navbar;
