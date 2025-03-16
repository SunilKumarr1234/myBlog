import React from 'react'

const Hero = () => {
  return (
    <div className='font-mono text-white text-center mt-16 px-4 sm:px-0'>
      <div className='p-2 m-2'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl font-sans leading-snug  '>
          SUNIL PITTI
        </h1>
      </div>

      <div className='flex flex-col items-start mx-auto w-fit mt-4'>
        <h4 className='ml-[-10px] text-lg sm:text-xl'>I am a __</h4>
        <ul className='list-disc list-inside text-left mt-2 space-y-1 sm:space-y-2'>
          <li className='text-base sm:text-lg'>CTF Player</li>
          <li className='text-base sm:text-lg'>Web3 Developer</li>
          <li className='text-base sm:text-lg'>Smart Contract Auditor</li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
