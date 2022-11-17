import React from 'react';
import Image from 'next/image';
import dog from '../assets/images/dog-eat.png';
import Button from './Button';

const Under = () => {
  return (
    <div className='underConstruction'>
        <div className='underContainer'>
            <p>Under Construction</p>
            <h1>We're Launching Soon!!</h1>
            <Button title='Learn More'/>
            <div className='underImage'>
                <Image 
                    src={dog}
                    alt = 'Dog under Construction'
                    layout = 'fill'
                    objectFit='contain'
                />
            </div>
        </div>
    </div>
  );
}

export default Under