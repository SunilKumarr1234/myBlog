import React, { useState } from 'react';
import Header from './Header';

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
        headers: {
          'Content-Type': 'application/json'
        },
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
    <div className='text-white min-h-screen flex flex-col font-mono'>
      <Header />
      <div className='flex flex-1 items-center justify-center px-4 py-6 sm:py-12'> {/* Added padding for spacing */}
        <form 
          onSubmit={handleSubmit} 
          className=' p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-black bg-opacity-80'
        >
          <h1 className='text-3xl sm:text-4xl text-green-500 mb-6 text-center'>Contact Me</h1>

          {/* Name Field */}
          <div className='mb-4'>
            <label className='block text-white mb-1'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-3 rounded bg-gray-500 bg-opacity-10 text-green-400 outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>

          {/* Email Field */}
          <div className='mb-4'>
            <label className='block text-white mb-1'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 rounded bg-gray-500 bg-opacity-10 text-green-400 outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>

          {/* Message Field */}
          <div className='mb-4'>
            <label className='block text-white mb-1'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full p-3 rounded bg-gray-500 bg-opacity-10 text-green-400 outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none'
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type='submit' 
            className='w-full bg-green-900 hover:bg-green-700 p-3 rounded-lg text-white font-semibold transition-all duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
