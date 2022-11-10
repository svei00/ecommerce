import React from 'react';
import { getCurrentYear } from '../assets/js/scripts';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { SiWhatsapp } from 'react-icons/si'
import Button from './Button';
import ItemsContainer from './itemsContainer';
import SocialIcons from './SocialIcons';
import { Icons } from "./Menu";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:pm-12 px-4 bg-[#ffffff19] py-7'>
          <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
              Croquetas <span className='bg-gradient-to-r from-red-700 via-yellow-400 to-black bg-clip-text text-transparent'>"El Kilo".</span>
          </h1>
          <div className="display: inline-flex pl-2 border border-slate-300 rounded-md md:flex md:justify-between md:items-center sm:justify-between sm:items-center bg-[#ffffff19]">
            <label><SiWhatsapp className='text-gray-800 tracking-widest'/></label>
            <input type="phone" name="phone" placeholder="Enter Your Phone Number"
                className="px-2 py-2 text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 rounded focus:outline-none bg-[#ffffff19]"
            />
            <Button
                title='Suscribe!'
                onClick={() => ''}
              />
        </div>

          <p>
              <AiFillInstagram className='inline'/>
              <AiFillFacebook className='inline'/>
              <AiOutlineTwitter className='inline'/>
          </p>
      </div>
      <ItemsContainer />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>All Rights Reserverd&reg; 2020 - {getCurrentYear()}</span>
        <span>Terms - Privacy Policy</span>
        <SocialIcons Icons = {Icons}/>
      </div>
    </footer>
  )
}

export default Footer