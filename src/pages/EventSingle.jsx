import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import Eventsinglecontent from '../components/Eventsinglecontent';




    
const EventSingle = ({eventData}) => {
    return (
        <>
            <MainLayout>
                <Banner />
                <Eventsinglecontent eventData = {eventData} />
                <Newsletter />
            </MainLayout>
        </>
    )
}

export default EventSingle
