import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Timeline = () => {
  const timelineData = [
    { year: "10-03-2025", event: "Met with Our Alumni (Ajay Shankar (Blockchain Auditor at OtterSec USA), Charan Nomula (Senior Blockchain Engineer at Supra USA), etc." },
    { year: "10-03-2025 - 15-03-2025", event: "Worked on building this Portfolio and stacking Smart Contract (DApp)" },
    { year: "05-03-2025 - 09-03-2025", event: "Wrote Smart Contract for MULTISIGNATURE Wallet" },
    { year: "03-03-2025", event: "Explored Hardhat, Mocha & Chai" }
  ];

  return (
    <div className='text-white h-[calc(100vh-60px)] flex flex-col font-mono'>
      <Header />
      <div className='flex-1 flex items-start justify-center w-full mt-8 pt-4'>
        <div className='w-full max-w-6xl'>
          {timelineData.map((item, index) => (
            <div key={index} className='flex flex-wrap items-center mb-6'>
              <div className='w-full sm:w-1/4 text-left sm:text-right pr-4 text-base sm:text-lg text-green-400'>
                {item.year}
              </div>
              <div className='hidden sm:block w-2 h-2 bg-green-400 rounded-full'></div>
              <div className='w-full sm:w-[70%] mt-2 sm:mt-0 pl-4 text-white'>
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
