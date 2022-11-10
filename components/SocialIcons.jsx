import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const SocialIcons = ({ Icons }) => {
  return (
    <div className='bg-gradient-to-r from-red-700 via-yellow-400 to-black bg-clip-text text-transparent'>
        {
            Icons.map((icon) => (
              <span
                key={icon.name} className='p-2 cursor.pointer inline-flex items-center rounded-full bg-gray-700
                mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-600 duration-300'>
                    <ion-icon name={icon.name} />
                    <AiFillInstagram className='inline'/>
              <AiFillFacebook className='inline'/>
              <AiOutlineTwitter className='inline'/>
                </span>
            ))
        }
        
    </div>
  )
}

export default SocialIcons;