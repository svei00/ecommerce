import React from 'react'

const SocialIcons = ({ Icons }) => {
  return (
    <div className='bg-gradient-to-r from-red-700 via-yellow-400 to-black bg-clip-text text-transparent'>
        {
            Icons.map((icon) => (
              <span
                key={icon.name} className='text-red-600 p-2 cursor.pointer inline-flex items-center rounded-full bg-gray-700
                mx-1.5 text-xl hover:text-gray-100 hover:bg-yellow-600 duration-300'>
                    <a href={icon.link}>{icon.library}</a>
                    
                </span>
            ))
        }
        
    </div>
  )
}

export default SocialIcons;