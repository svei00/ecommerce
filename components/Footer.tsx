import React from 'react';
import { getCurrentYear } from '../assets/js/scripts';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='flex items-center justify-center'>
        <p>
        Croquetas "El Kilo". All Rights Reserverd&reg; 2020 - {getCurrentYear()}
        </p>
        <p>
            <AiFillInstagram className='inline'/>
            <AiFillFacebook className='inline'/>
            <AiOutlineTwitter className='inline'/>
        </p>
    </div>
  )
}

export default Footer