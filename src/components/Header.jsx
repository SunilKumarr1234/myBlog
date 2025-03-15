import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import burger icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='font-mono sticky top-0 z-50 flex justify-between text-white shadow-md bg-black px-4 sm:px-10'>
      {/* Gradient Bottom Border */}
      <div className='absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white to-green-500'></div>

      {/* Logo Section */}
      <div className='p-2 m-2'>
        <h1 className="bg-gradient-to-r from-green-500 to-white text-transparent bg-clip-text text-2xl sm:text-3xl font-bold">
          <Link to='/'>@0xCipher</Link>
        </h1>
      </div>

      {/* Burger Menu for Mobile */}
      <div className='flex items-center sm:hidden'>
        <button onClick={toggleMenu} className='text-3xl'>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`absolute top-14 left-0 w-full bg-black text-center sm:static sm:w-auto sm:flex ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col sm:flex-row text-lg sm:text-xl gap-4 sm:gap-8 pt-4 sm:pt-5 p-2 m-2'>
          {['Blogs', 'WriteUps', 'Projects', 'Contact', 'TimeLine'].map((item, index) => (
            <li
              key={index}
              className='relative cursor-pointer after:content-[""] after:block after:w-full after:h-[3px] 
                        after:bg-green-500 after:absolute after:bottom-[-3px] 
                        after:scale-x-0 hover:after:scale-x-100 
                        after:transition-transform after:duration-300'
            >
              <Link to={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
