import React from 'react';
import { getCurrentYear } from '../assets/js/scripts';
import { FaSignInAlt } from 'react-icons/fa';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';
import { Icons } from "./Menu";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:pm-12 px-4 bg-[#ffffff19] py-7'>
          <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
              Croquetas <span className='bg-gradient-to-r from-red-700 via-yellow-400 to-black bg-clip-text text-transparent'>&quot;El Kilo&quot;.</span>
          </h1>
          <div className="inline-flex pl-2 border border-slate-300 rounded-md md:flex md:justify-between md:items-center sm:justify-between sm:items-center bg-white">
            <label>
              {/* Replacing SiWhatsapp with the raw SVG icon for WhatsApp */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 tracking-widest">
                <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12c0 1.64.4 3.19 1.1 4.57L2 22l5.43-1.1C8.81 21.6 10.36 22 12 22z"></path>
                <path d="M16.09 15.91l-.91-.09c-.32-.02-.63-.16-.86-.39l-1.48-1.49c-.19-.19-.45-.28-.7-.24l-.8.16c-.44.1-.9.01-1.27-.23-.71-.42-1.33-1.04-1.76-1.75-.24-.37-.34-.82-.24-1.27l.16-.8c.04-.25-.05-.51-.24-.7L8.57 9.68c-.23-.23-.37-.54-.39-.86l-.09-.91c-.05-.55.34-1.02.89-1.07 1.42-.13 2.86.32 3.96 1.42 1.1 1.1 1.55 2.54 1.42 3.96-.05.55-.52.94-1.07.89z"></path>
              </svg>
            </label>
            <input 
                type="phone" 
                name="phone" 
                placeholder='Enter Your Phone Number'
                className="px-2 py-2 text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 rounded focus:outline-none"
            />
            <Button
                title={<span className='inline-flex'><FaSignInAlt /> Suscribe!</span>}  
                onClick={() => ''}
            />
          </div>
      </div>
      <ItemsContainer />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>All Rights Reserved® 2020 - {getCurrentYear()}</span>
        <span>Terms - Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
}

export default Footer;