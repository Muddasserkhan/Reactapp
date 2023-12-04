import React, { useState, useEffect } from 'react';
const Timer = ({targetDate}) => {
    const calculateTimeRemaining = () => {
        const now = new Date();
        // const targetDate = new Date('12-12-2023');

        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
          ];

        const date = now.getDate();
        const month = now.getMonth();
        const finalmonth = monthNames[month];
        const year = now.getFullYear();

        
        const difference = targetDate - now;
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds, date, month, year, finalmonth};
    };
    
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeRemaining(calculateTimeRemaining());
        }, 1000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);

    const circle = {
        width:'450px',
        height:'450px',

        '@media only screen and (max-width: 570px)': {
            width: '350px',
            height: '350px', 
        }
    }
    return (
        <>
            <div className="col-lg-6 mb-lg-0 mb-sm-5 mb-5">
                <div className="circle rounded-circle border border-5 mx-xl-auto d-flex flex-column justify-content-end gap-5 pb-5 mx-lg-0 mx-sm-auto" style={circle}>
                    <div className="timer gap-lg-3 gap-md-2 gap-sm-1 mx-auto d-flex justify-content-between align-items-center">
                    <div className="t_inner text-center">
                        <h3 className="p-0 m-0 text-white">{timeRemaining.days}</h3>
                        <h5 className="p-0 m-0 text-white">Days</h5>
                    </div>
                    <div>
                        <h4 className="fw-semibold text-white">:</h4>
                    </div>
                    <div className="t_inner text-center">
                        <h3 className="p-0 m-0 text-white">{timeRemaining.hours}</h3>
                        <h5 className="p-0 m-0 text-white">Hours</h5>
                    </div>
                    <div>
                        <h4 className="fw-semibold text-white">:</h4>
                    </div>
                    <div className="t_inner text-center">
                        <h3 className="p-0 m-0 text-white">{timeRemaining.minutes}</h3>
                        <h5 className="p-0 m-0 text-white">Minutes</h5>
                    </div>
                    <div>
                        <h4 className="fw-semibold text-white">:</h4>
                    </div>
                    <div className="t_inner text-center">
                        <h3 className="p-0 m-0 text-white">{timeRemaining.seconds}</h3>
                        <h5 className="p-0 m-0 text-white">Seconds</h5>
                    </div>
                    </div>
                    <div className="date_cal text-center">
                    <div className="d-inline-block text-center">
                        <div className="bg-light text-center p-1 pb-0">
                        <div className="bg-dark px-4 py-2">
                            <h2 className="p-0 m-0 text-white">{timeRemaining.date}</h2>
                            <p className="p-0 m-0 text-white">{timeRemaining.finalmonth}</p>
                        </div>
                        <p className="p-0 m-0">{timeRemaining.year}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timer
