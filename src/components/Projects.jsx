import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Projects = () => {
  const projectData = [
    {
      title: 'Multisignature Wallet ',
      description: 'A Multisignature (Multisig) Wallet is a smart contract or cryptographic wallet that requires multiple approvals (signatures) before executing a transaction.',
      tech: ['Solidity'],
      link: 'https://github.com/0xC1ph3r-08/Solidity/blob/main/contracts/MultiSignatureWallet.sol'
    }
  ];

  return (
    <div className='text-white min-h-screen flex flex-col font-mono pb-40 '>
      <Header />

      {/* Project Section */}
      <div className='flex flex-1 items-center justify-center px-4 pt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl'>
          {projectData.map((project, index) => (
            <div
              key={index}
              className='bg-[#121212] border border-gray-700 p-5 rounded-lg shadow-md'
            >
              <h3 className='text-lg text-green-500 font-semibold mb-2'>{project.title}</h3>
              <p className='text-sm text-white mb-4'>{project.description}</p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className='bg-gray-500 bg-opacity-10 text-green-400 px-2 py-1 rounded text-xs font-semibold'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link !== '#' && (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-400 hover:text-green-300 transition-all duration-300 underline'
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
