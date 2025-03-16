import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    try {
      await fetch('https://formspree.io/f/xvgkggry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='text-white min-h-screen flex flex-col font-mono pb-10'>
      <Header />
      <div className='flex flex-1 items-center justify-center px-4 py-6'>
        <form 
          onSubmit={handleSubmit} 
          className='p-4 rounded-md shadow-md w-full max-w-sm bg-black bg-opacity-80'
        >
          <h1 className='text-2xl text-green-500 mb-4 text-center'>Contact Me</h1>

          {/* Name Field */}
          <div className='mb-3'>
            <label className='block text-white mb-1 text-sm'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-2 rounded bg-gray-500 bg-opacity-10 text-green-400 outline-none focus:ring-1 focus:ring-green-500'
              required
            />
          </div>

          {/* Email Field */}
          <div className='mb-3'>
            <label className='block text-white mb-1 text-sm'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-2 rounded bg-gray-500 bg-opacity-10 text-green-400 outline-none focus:ring-1 focus:ring-green-500'
              required
            />
          </div>

          {/* Message Field */}
          <div className='mb-3'>
            <label className='block text-white mb-1 text-sm'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full p-2 rounded bg-gray-500 bg-opacity-10 text-green-400 outline-none focus:ring-1 focus:ring-green-500 h-24 resize-none'
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type='submit' 
            className='w-full bg-green-700 hover:bg-green-600 p-2 rounded-md text-white font-semibold transition-all duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
