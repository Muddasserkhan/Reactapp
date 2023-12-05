import React from 'react';
import MainLayout from '../layouts/MainLayout'
import Banner from '../components/banner'
import Newsletter from '../components/newsletter'
import Eventsinglecontent from '../components/eventsinglecontent'




    
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
