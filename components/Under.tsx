import React from 'react';
import Image from 'next/image';
import dog from '../assets/images/dog-eat.png';
import Button from './Button';
import { TbClick } from 'react-icons/tb';

const Under = () => {
  return (
    <div className='underConstruction'>
        <div className='underContainer'>
            <p>Under Construction</p>
            <h1>We're <span>Launching</span> Soon!!</h1>
            
            <div className='launchTime'>
                <div>
                    <p>00</p>
                    <span>Days</span>
                </div>
                <div>
                    <p>00</p>
                    <span>Hours</span>
                </div>
                <div>
                    <p>00</p>
                    <span>Minutes</span>
                </div>
                <div>
                    <p>00</p>
                    <span>Seconds</span>
                </div>
            </div>
            
            <Button 
                title={<span className='inline-flex'>Learn More  <TbClick /></span>}  
                onClick={() => ''}
            />
            
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