import React from 'react'
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'  // Modern icons

const Footer = () => {
  return (
    <div className='bg-black text-white text-center fixed bottom-0 w-full p-4'>
      <h2 className='text-sm font-bold mb-4 font-mono'>Connect with Me</h2>

      <div className='flex justify-center gap-6'>
        <a href="https://www.linkedin.com/in/sunil-kumar-14962b2bb/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-3xl text-green-500 hover:text-white  transition-all duration-300' />
        </a>

        <a href="https://github.com/0xC1ph3r-08" target="_blank" rel="noopener noreferrer">
          <FaGithub className='text-3xl text-green-500 hover:text-white  transition-all duration-300' />
        </a>

        <a href="https://x.com/C1ph3r0x79888" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className='text-3xl text-green-500 hover:text-white transition-all duration-300' />
        </a>
      </div>
    </div>
  )
}

export default Footer
