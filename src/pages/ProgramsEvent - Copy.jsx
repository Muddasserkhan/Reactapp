import React, {useState, useEffect} from 'react'
import MainLayout from '../layouts/MainLayout'
import Event from '../components/Event'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'
import {eventData} from '../EventData';
// import Searchfilter from '../components/Searchfilter'

const ProgramsEvent = ({eventData}) => {
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
        console.log(month.target.value);
    }
    const handleChangeYear = (year) => {
        setYear(year.target.value);
        console.log(year.target.value);
    }

    const filteredEvents = eventData.filter(event => {
        // Your filtering logic based on selectedMonth and selectedYear
        return (
          (searchMonth === '' || event.month === searchMonth) &&
          (searchYear === '' || event.year === searchYear)
        );
    });

    useEffect(()=>{
        setNewlist(filteredEvents);
    }, [searchMonth,searchYear])

    return (
        <div>
            <MainLayout>
                <Banner />
                <section className="section2 py-5 px-md-0 px-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-4">
                                <h2>Discover All The Evets</h2>
                            </div>
                            {/* <Searchfilter /> */}

                            <div className="col-md-6 mx-auto">
                                <form className="row justify-content-center gap-3 mb-5">
                                    <div className="d-flex justify-content-center flex-md-row justify-content-center gap-4 flex-lg-row flex-md-column flex-column">
                                        <div className="form-group d-flex gap-3 justify-content-center">
                                            <label htmlFor="inputEmail3" className="col-form-label m-0 px-0">
                                                Select Month
                                            </label>
                                            <div className="px-0">
                                                <select
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

                        </div>

                        <Event event = {newList} />
                        
                    </div>
                </section>
                
                <Newsletter />
            </MainLayout>
        </div>
    )
}

export default ProgramsEvent