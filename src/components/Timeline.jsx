import React from 'react';
import Header from './Header';

const Tags = () => {
  const timelineData = [
    { year: "10-03-2025", event: "Met with Our Alumni (Ajay Shankar (Blockchain Auditor at OtterSec USA), Charan Nomula (Senior Blockchain Engineer at Supra USA), etc." },
    { year: "10-03-2025 - 15-03-2025", event: "Worked on building this Portfolio and stacking Smart Contract (DApp)" },
    { year: "05-03-2025 - 09-03-2025", event: "Wrote Smart Contract for MULTISIGNATURE Wallet" },
    { year: "03-03-2025", event: "Explored Hardhat, Mocha & Chai" }
  ];

  return (
    <div className='text-white min-h-screen flex flex-col font-mono px-4'>
      <Header />
      <div className='flex flex-1 items-start justify-center w-full mt-8 pt-4'>
        <div className='w-full max-w-6xl'>
          {timelineData.map((item, index) => (
            <div key={index} className='flex flex-wrap items-center mb-6'>

              {/* Date (Left on Mobile, Right on Larger Screens) */}
              <div className='w-full sm:w-1/4 text-left sm:text-right pr-4 text-base sm:text-lg text-green-400'>
                {item.year}
              </div>

              {/* Dot (Visible only on screens ≥ sm) */}
              <div className='hidden sm:block w-2 h-2 bg-green-400 rounded-full'></div>

              {/* Event Description */}
              <div className='w-full sm:w-[70%] mt-2 sm:mt-0 pl-4 text-white'>
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
