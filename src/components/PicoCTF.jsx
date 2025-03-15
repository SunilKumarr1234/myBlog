import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa' // Download Icon
import Header from './Header'
import Footer from './Footer'

const PicoCTF = () => {

  const downloadPDF = (category) => {
    const fileName = `${category}.pdf`
    const pdfPath = `${import.meta.env.BASE_URL}pdfs/${fileName}` // ✅ Corrected path for GitHub Pages
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = fileName
    link.click()
  }

  return (
    <div>
      <Header />
      <div className='font-mono text-white px-6 sm:px-14 mt-10 pb-32'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6'>

          {/* Category Component */}
          {[
            { name: 'General Skills', pdf: 'General_Skills' },
            { name: 'Forensics', pdf: 'Forensics' },
            { name: 'Reverse Engineering', pdf: 'Reverse_Engineering' },
            { name: 'Web Exploitation', pdf: 'Web_Exploitation' },
            { name: 'Cryptography', pdf: 'Cryptography' },
            { name: 'Binary Exploitation', pdf: 'Binary_Exploitation' }
          ].map((category, index) => (
            <li
              key={index}
              className='bg-gray-700 bg-opacity-10 rounded-lg p-4 relative'
            >
              {/* Download Button Positioned at Top-Right */}
              <button
                className='absolute top-2 right-2 text-green-500 hover:text-green-400 transition-all duration-300'
                onClick={() => downloadPDF(category.pdf)}
                title='Download PDF'
              >
                <FaDownload size={15} />
              </button>

              <span className='text-xl'>
                <span className='text-green-500 mr-3'>###</span>
                {category.name}
              </span>

              <ul className='pl-5 pt-2 space-y-1'>
                {category.name === 'Cryptography' ? (
                  <>
                    <li className='hover:text-green-500'>
                      <Link to='https://play.picoctf.org/practice/challenge/351?category=2&page=1'>
                        ➤ HideToSee
                      </Link>
                    </li>
                    <li className='hover:text-green-500'>
                      <Link to='https://play.picoctf.org/practice/challenge/418?category=2&page=1'>
                        ➤ interencdec
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className='hover:text-green-500'>➤ Will be Uploaded soon...</li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default PicoCTF
