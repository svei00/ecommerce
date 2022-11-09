import React from 'react';
import { getCurrentYear } from '../assets/js/scripts';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:pm-12 px-4 bg-[#ffffff19] py-7'>
          <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
              Croquetas <span className='bg-gradient-to-r from-red-700 via-yellow-400 to-black bg-clip-text text-transparent'>"El Kilo".</span> All Rights Reserverd&reg; 2020 - {getCurrentYear()}
          </h1>
          <div>
            <input 
            type="text"
            placeholder='Enter your phone '
            />
            <i className='fa fa-whatsapp'></i>
           
          </div>   

          <p>
              <AiFillInstagram className='inline'/>
              <AiFillFacebook className='inline'/>
              <AiOutlineTwitter className='inline'/>
          </p>
      </div>
    </footer>
  )
}

export default Footer