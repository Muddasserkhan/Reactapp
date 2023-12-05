import React, { useState, useEffect } from 'react';

const Calander = () => {
    const calculateCalander = () => {
        const now = new Date();

        const monthNames = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
          ];

        const date = now.getDate();
        const month = now.getMonth();
        const finalmonth = monthNames[month];
        const year = now.getFullYear();
    
        return { date, month, year, finalmonth};
    };
    
    const [timeRemaining, setcalculateCalander] = useState(calculateCalander());
    
    useEffect(() => {
        const timer = setInterval(() => {
        setcalculateCalander(calculateCalander());
    }, 1000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className="date_cal text-center">
                <div className="d-inline-block text-center">
                    <div className="bg-light text-center pb-0 border border-1">
                        <div className="bg-dark px-4 py-2">
                            <h2 className="p-0 m-0 text-white">{timeRemaining.date}</h2>
                            <p className="p-0 m-0 text-white">{timeRemaining.finalmonth}</p>
                        </div>
                        <p className="p-0 m-0">{timeRemaining.year}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calander
