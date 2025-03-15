import React from 'react';
import Header from './Header';

const Post = () => {
  return (
    <div className='text-white h-[calc(100vh-60px)] flex flex-col font-mono'>
      <Header />
      <div className='flex flex-1 items-center justify-center px-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-green-500 text-center'>
          Blogs will be uploaded soon...
        </h1>
      </div>
    </div>
  );
};

export default Post;
