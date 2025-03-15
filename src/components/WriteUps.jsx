import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const WriteUps = () => {
  return (
    <div className='font-mono text-white min-h-screen flex flex-col'>
      <Header />
      
      {/* Title */}
      <h1 className='mt-10 px-4 text-3xl sm:text-4xl'>
        CTF WriteUps<span className='text-green-500'>.</span>
      </h1>

      {/* CTF Links */}
      <div className='mt-7 px-4 flex flex-col gap-y-4'>

        {/* PicoCTF */}
        <div className='flex items-center gap-4'>
          <h1 className='text-green-800 text-lg font-bold'>#</h1>
          <h2 className='font-mono text-lg relative cursor-pointer hover:after:content-[""] 
                         hover:after:block hover:after:w-full hover:after:h-[2px] 
                         hover:after:bg-green-500 hover:after:mt-0.5'>
            <Link to='/picoctf-writeups'>Pico CTF</Link>
          </h2>
        </div>

        {/* Ethernaut CTF */}
        <div className='flex items-center gap-4'>
          <h1 className='text-green-800 text-lg font-bold'>#</h1>
          <h2 className='font-mono text-lg relative cursor-pointer hover:after:content-[""] 
                         hover:after:block hover:after:w-full hover:after:h-[2px] 
                         hover:after:bg-green-500 hover:after:mt-0.5'>
            <Link >Ethernaut CTF</Link>
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WriteUps
