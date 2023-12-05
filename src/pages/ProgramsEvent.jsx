import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Event from '../components/event'
import Banner from '../components/banner'
import Searchfilter from '../components/searchfilter'
import Newsletter from '../components/newsletter'

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
                            <Searchfilter />
                        </div>

                        <Event event = {eventData} />
                        
                    </div>
                </section>

                <Newsletter />
            </MainLayout>
        </div>
    )
}

export default ProgramsEvent
