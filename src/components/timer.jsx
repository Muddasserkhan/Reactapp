import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Timer = ({targetDate}) => {
    const calculateTimeRemaining = () => {
        const now = new Date();

        const difference = targetDate - now;
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds};
    };
    
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    
    useEffect(() => {
        const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);
    
    const location = useLocation();
    const isSingleEvent = location.pathname === '/event-single';


    const textColorStyle = {
        color: isSingleEvent ? 'dark' : 'white', // Change 'red' to your desired color
    };

    return (
        <>
            <div className="timer gap-lg-3 gap-md-2 gap-sm-1 mx-auto d-flex justify-content-between align-items-center">
                <div className="t_inner text-center">
                    <h3 className="p-0 m-0" style={textColorStyle}>{timeRemaining.days}</h3>
                    <h5 className="p-0 m-0" style={textColorStyle}>Days</h5>
                </div>
                
                <div>
                    <h4 className="fw-semibold" style={textColorStyle}>:</h4>
                </div>
                
                <div className="t_inner text-center">
                    <h3 className="p-0 m-0" style={textColorStyle}>{timeRemaining.hours}</h3>
                    <h5 className="p-0 m-0" style={textColorStyle}>Hours</h5>
                </div>
                
                <div>
                    <h4 className="fw-semibold" style={textColorStyle}>:</h4>
                </div>
                
                <div className="t_inner text-center">
                    <h3 className="p-0 m-0" style={textColorStyle}>{timeRemaining.minutes}</h3>
                    <h5 className="p-0 m-0" style={textColorStyle}>Minutes</h5>
                </div>
                
                <div>
                    <h4 className="fw-semibold" style={textColorStyle}>:</h4>
                </div>
                
                <div className="t_inner text-center">
                    <h3 className="p-0 m-0" style={textColorStyle}>{timeRemaining.seconds}</h3>
                    <h5 className="p-0 m-0" style={textColorStyle}>Seconds</h5>
                </div>
            </div>
        </>
    )
}

export default Timer
