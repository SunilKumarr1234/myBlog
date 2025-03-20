import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogData = [
    
  ];

  // Filter logic
  const filteredBlogs =
    activeCategory === 'All'
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  return (
    <div className='text-white min-h-screen flex flex-col font-mono pb-32'>
      <Header />

      {/* Filter Section */}
      <div className='flex justify-center gap-4 py-4 pb-10'>
        {['All', 'Smart Contract Audits', 'Web3/Blockchain Development'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-300
                        ${
                          activeCategory === category
                            ? 'bg-green-500 text-black'
                            : 'border border-green-500 text-white hover:bg-green-500 hover:text-black'
                        }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className='flex-1 flex items-center justify-center px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl'>
          {filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className='bg-gray-500 bg-opacity-10 border border-gray-700 p-5 rounded-lg shadow-md'
            >
              <h3 className='text-lg text-green-500 font-semibold mb-2'>{blog.title}</h3>
              <p className='text-sm text-white mb-4'>{blog.description}</p>

              <a
                href={blog.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-400 hover:text-green-300 transition-all duration-300 underline'
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
