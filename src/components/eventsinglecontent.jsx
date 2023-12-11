import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";

const Eventsinglecontent = ({eventData}) => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        // Find the event in eventData based on the eventId
        const selectedEvent = eventData.find((event) => event.id === parseInt(eventId));
    
        // Update the state with the selected event
        setEvent(selectedEvent);
    }, [eventId, event]);


    
    return (
        <>
            <section className="section2 py-5 px-md-0 px-3">
                <div className="container py-4">
                    <div className="row text-center">
                        {
                            event ? (
                                <>
                                    <div>
                                        <div className="date_cal text-center mb-4">
                                            <div className="d-inline-block text-center">
                                                <div className="bg-light text-center pb-0 border border-1">
                                                    <div className="bg-dark px-4 py-2">
                                                        <h2 className="p-0 m-0 text-white">{event.date}</h2>
                                                        <p className="p-0 m-0 text-white">{event.month}</p>
                                                    </div>
                                                    <p className="p-0 m-0">{event.year}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <h2>{event.event_title}</h2>
                                        
                                        <div className="d-flex justify-content-center gap-2 my-3">
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
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="my-2">
                                            <Link to={event.view_map[0].link}>{event.view_map[0].text}</Link>
                                        </div>
                                        
                                        <p className='mb-5'>{event.event_description}</p>
                                        <div>
                                            <img src={event.image} alt="location" className='w-100'/>
                                        </div>
                                        <Link to={event.event_btn[0].link} className='btn btn-dark mt-5'>{event.event_btn[0].text}</Link>
                                    </div>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Eventsinglecontent
