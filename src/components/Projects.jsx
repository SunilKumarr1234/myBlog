import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Projects = () => {
  return (
    <div className='text-white h-[calc(100vh-60px)] flex flex-col font-mono'>
      <Header />
      <div className='flex flex-1 items-center justify-center px-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-green-500 text-center'>
          Projects will be uploaded soon...
        </h1>
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;


// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// const Projects = () => {
//   const projectData = [
//     {
//       title: 'NetflixGPT',
//       description: 'AI-powered movie search platform with TMDB API and Gemini AI integration.',
//       tech: ['React', 'Tailwind', 'Firebase'],
//       link: 'https://netflixgpt.vercel.app/'
//     },
//     {
//       title: 'Staking DApp',
//       description: 'Blockchain-based staking platform with smart contract integration.',
//       tech: ['Solidity', 'Hardhat', 'Next.js'],
//       link: '#'
//     },
//     {
//       title: 'Crypto Tracker',
//       description: 'Track live cryptocurrency prices and market trends.',
//       tech: ['React', 'CoinGecko API'],
//       link: '#'
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'A dynamic portfolio showcasing projects, blogs, and write-ups.',
//       tech: ['React', 'Framer Motion', 'Tailwind'],
//       link: '#'
//     }
//   ];

//   return (
//     <div className='text-white h-[calc(100vh-60px)] flex flex-col font-mono'>
//       <Header />

//       {/* Project Section */}
//       <div className='flex flex-1 items-center justify-center px-4'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl'>
//           {projectData.map((project, index) => (
//             <div
//               key={index}
//               className='bg-black bg-opacity-80 border border-green-500 p-5 rounded-lg shadow-lg'
//             >
//               <h3 className='text-xl font-bold text-green-500 mb-2'>{project.title}</h3>
//               <p className='text-sm text-gray-300 mb-4'>{project.description}</p>

//               <div className='flex flex-wrap gap-2 mb-4'>
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className='bg-green-500 text-black px-2 py-1 rounded text-xs font-semibold'
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {project.link !== '#' && (
//                 <a
//                   href={project.link}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='text-green-400 underline hover:text-white transition-all duration-300'
//                 >
//                   View Project →
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Projects;

