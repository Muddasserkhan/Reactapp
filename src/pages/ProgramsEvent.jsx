import React from 'react'
import MainLayout from '../layouts/MainLayout'
// import Event from '../components/Event'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'
// import {eventData} from '../EventData';
import Searchfilter from '../components/Searchfilter'

const ProgramsEvent = ({eventData}) => {

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
                            <Searchfilter eventData={eventData}/>

                        </div>

                        {/* <Event event = {eventData} /> */}
                        
                    </div>
                </section>
                
                <Newsletter />
            </MainLayout>
        </div>
    )
}

export default ProgramsEvent