import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dog from '../assets/images/boxer.jpg';
import Button from './Button';
import { TbClick } from 'react-icons/tb';
import { getRemainingTimeUntilMsTimeStamp } from '../assets/js/scripts'


const defaulTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const Under = ({countdownTimeStampMS}) => {

  const [reamainingTime, setRemainingTime] = useState(defaulTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
        updateRemainingTime(countdownTimeStampMS);
    }, 1000);
    return () => clearInterval(intervalId);
  },[countdownTimeStampMS]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimeStamp(countdown));
  }

  return (
    <div className='underConstruction'>
        <div className='underContainer'>
            <p>Under Construction</p>
            <h1>We&apos;re <span>Launching</span> Soon!!</h1>
            
            <div className='launchTime'>
                <div>
                    <p>{reamainingTime.days}</p>
                    <span>Days</span>
                </div>
                <div>
                    <p>{reamainingTime.hours}</p>
                    <span>Hours</span>
                </div>
                <div>
                    <p>{reamainingTime.minutes}</p>
                    <span>Minutes</span>
                </div>
                <div>
                    <p>{reamainingTime.seconds}</p>
                    <span>Seconds</span>
                </div>
            </div>
            
            <Button 
                title={<span className='inline-flex'>Learn More  <TbClick /></span>}  
                onClick={() => ''}
            />
        </div>
        <div className='underImage'>
            {/* <Image 
                src={dog}
                alt = 'Dog under Construction'
                layout = 'fill'
                objectFit='contain'
            /> */}
        </div>
    </div>
  );
}

export default Under