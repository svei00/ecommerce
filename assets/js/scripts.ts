export const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  export function getRemainingTimeUntilMsTimeStamp(timeStampMs) {
    
    const timestampDayjs = dayjs(timeStampMs);
    const nowDayjs = dayjs()
    
    return {
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days
    };

    const countDownDate = new Date('Jan 1, 2023 00:00:00').getTime();
    const x = setInterval(function(){
      const now = new Date().getTime();
      const distance = countDownDate - now;
  
      const secs = Math.floor((distance / (1000 * 60 )) / 1000 );
      const minutes = Math.floor((distance / (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor((distance / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
   }, 1000)

  }