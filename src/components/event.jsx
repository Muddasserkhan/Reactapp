import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";
function Event({event}) {
    
    
    return (
        <>
           {
                event.map((event ,index) => (
                    <div className="row p-4 border border-1 align-items-center mb-4 gap-md-0 gap-sm-4 gap-4">
                        <div className="col-md-2 p-0 m-0">
                            <div className="date_cal">
                                <div className="d-inline-block text-center">
                                    <div className="MK_bgcolor text-center border border-1">
                                    <div className="px-4 py-2 bg-dark">
                                        <h2 className="p-0 m-0 text-white">{event.date}</h2>
                                        <p className="p-0 m-0 text-white">{event.month}</p>
                                    </div>
                                    <p className="p-0 m-0 MK_bgcolor text-dark">{event.year}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 p-0 m-0">
                            <div className="m-0">
                            <h4 className="m-0 p-0">{event.event_title}</h4>
                            <p className="m-0 p-0 my-2 grey_color">
                                {event.event_description}
                            </p>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#000"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                    >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                            </span>
                            <span className="m-0 p-0 me-2">
                                {event.location}
                            </span>
                            <span>
                                <Link to={'/view-map'} className='btn p-0 text-primary'>View Map</Link>
                            </span>
                            </div>
                        </div>
                        <div className="col-md-3 text-md-end p-0 m-0">
                            <Link to={`/event-single/${event.id}`} className="btn btn-outline-dark"assName="puple_outline_btn btn">
                                Join This Event
                            </Link>
                        </div>
                    </div>
                ))
           }

            
        </>
    )
}

export default Event
