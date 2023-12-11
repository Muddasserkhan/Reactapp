import React from 'react';
import { useLocation } from 'react-router-dom';
import Timer from './Timer';
import Calander from './Calander';
// import styled, { css } from 'styled-components';
import {Link} from "react-router-dom";

const targetDate = new Date('12-15-2023');

const Banner = () => {
    
    const circle = {
        width:'450px',
        height:'450px',
    };
    // const targetData = '12-12-2023';
    const location = useLocation();
    const isEvent = location.pathname === '/';
    // const isSingleEvent = location.pathname === '/event-single/:eventId';
    const isSingleEvents = location.pathname.startsWith('/event-single/');
    const isSingleEvent = isSingleEvents ? location.pathname.split('/event-single/')[1] : null;
    return (
        <>
            <section className="section1 px-0">
                <div className="bg-dark py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-lg-0 mb-sm-5 mb-5">
                                <div className="circle rounded-circle border border-5 mx-xl-auto d-flex flex-column justify-content-end gap-5 pb-5 mx-lg-0 mx-sm-auto mx-auto" style={circle}>
                                    {
                                        isEvent && 
                                        (
                                            <>
                                                <Timer targetDate={targetDate} />
                                                <Calander />
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex flex-column justify-content-center h-100 text-lg-start text-sm-center text-center">
                                    <div className="right_top mb-md-5 mb-sm-4 mb-4">
                                    <p className="m-0 p-0 text-light pb-2">UPCOMING EVENTS</p>
                                    <h1 className="m-0 p-0 text-white pb-2">
                                        ANNUAL MEET UP AND <br />
                                        EXPERTS COLLABORATIONS
                                    </h1>
                                    <div className="location d-flex align-items-center gap-1 justify-content-lg-start justify-content-sm-center justify-content-center">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="#fff"
                                        className="bi bi-geo-alt-fill"
                                        viewBox="0 0 16 16"
                                        >
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                        </svg>
                                        <p className="m-0 p-0 text-white">
                                        Findlancer Terrace, Gondisuli, California
                                        </p>
                                    </div>
                                    </div>
                                    <div className="right_bottom">
                                        {
                                            isEvent && 
                                            <Link to={"/join"} className="btn btn-outline-light"ame="btn btn-light join_event">
                                                Join This Event
                                            </Link>
                                        }
                                        
                                        {
                                            isSingleEvent &&
                                            
                                            <div className="bg-light text-dark p-4">
                                                <Timer targetDate={targetDate} />
                                            </div>
                                        }
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
