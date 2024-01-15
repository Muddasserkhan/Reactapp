import React,{useState,useEffect, useRef} from 'react';
import Event from './Event';
// import {eventData} from '../EventData';

const Searchfilter = ({eventData}) => {
    let input = useRef(null);
    const monthNames = [
        'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
    ];
    
    const currentYear = new Date().getFullYear();
    const yearsRange = 20;
    const years = Array.from({ length: yearsRange * 2 + 1 }, (_, index) => currentYear - yearsRange + index);
    
    const [searchMonth, setMonth] = useState('');
    const [searchYear, setYear] = useState('');

    const [newList, setNewlist] = useState([]);

    const handleChangeMonth = (month) => {
        setMonth(month.target.value);
    }
    const handleChangeYear = (year) => {
        setYear(year.target.value);
    }

    const filteredEvents = eventData.filter(event => {
        return (
            (searchMonth === '' || event.month === searchMonth) &&
            (searchYear === '' || event.year === searchYear)
        );
    });

    useEffect(()=>{
        setNewlist(filteredEvents);
    }, [searchMonth, searchYear])

    return (
        <>
            <div className="col-md-6 mx-auto">
                <form className="row justify-content-center gap-3 mb-5">
                    <div className="d-flex justify-content-center flex-md-row justify-content-center gap-4 flex-lg-row flex-md-column flex-column">
                        <div className="form-group d-flex gap-3 justify-content-center">
                            <label htmlFor="inputEmail3" className="col-form-label m-0 px-0">
                                Select Month
                            </label>
                            <div className="px-0">
                                <select ref={input}
                                className="form-select form-select-md"
                                aria-label=".form-select-lg example"
                                value={searchMonth}
                                onChange={handleChangeMonth}
                                >
                                <option value='Choose the month'>Choose the Month</option>
                                {
                                    monthNames.map((month, index) => (
                                        <option key={index} value={month}>
                                            {month}
                                        </option>
                                    ))
                                }
                                </select>
                            </div>
                        </div>

                        <div className="form-group d-flex gap-3 justify-content-center">
                            <label htmlFor="inputPassword3" className="col-form-label px-0">
                                Select Year
                            </label>
                            <div className="px-0">
                                <select
                                className="form-select form-select-md"
                                aria-label=".form-select-lg example"
                                onChange={handleChangeYear}
                                >
                                <option value='Choose the year'>Choose the year</option>
                                {
                                    years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))
                                }
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    <div className="text-md-start text-center">
                        {newList.length === 0 ? (
                            <p className="text-md-start">Events Not Found</p>
                        ) : (
                            <Event event={newList} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchfilter
