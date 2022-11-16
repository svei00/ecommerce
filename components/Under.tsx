import React from 'react';
import Image from 'next/image';
import dog from '../assets/images/dog-eat.png';

const Under = () => {
  return (
    <div className='underConstruction'>
        <div className='underContainer'>
            <h1>Under Construction</h1>
            <Image 
                src={dog} 
                alt = 'Dog under Construction'
                layout = 'fill'
                objectFit='contain'
            />
        </div>
    </div>
  );
}

export default Under