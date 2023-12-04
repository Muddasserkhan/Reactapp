import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Event from '../components/event'
import Banner from '../components/banner'
import Searchfilter from '../components/searchfilter'
const eventData = [
    {
        date:'12',
        month:'April',
        year:'2019',
        event_title:'Experts Collaborations',
        event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
        location:'Gonaomanan Street 229, California',
        view_map:'',
        event_btn:'Join This Event',
    },

    {
        date:'12',
        month:'April',
        year:'2019',
        event_title:'Experts Collaborations',
        event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
        location:'Gonaomanan Street 229, California',
        view_map:'',
        event_btn:'Join This Event',
    },

    {
        date:'12',
        month:'April',
        year:'2019',
        event_title:'Experts Collaborations',
        event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
        location:'Gonaomanan Street 229, California',
        view_map:'',
        event_btn:'Join This Event',
    },

    {
        date:'12',
        month:'April',
        year:'2019',
        event_title:'Experts Collaborations',
        event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
        location:'Gonaomanan Street 229, California',
        view_map:'',
        event_btn:'Join This Event',
    },

    {
        date:'12',
        month:'April',
        year:'2019',
        event_title:'Experts Collaborations',
        event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
        location:'Gonaomanan Street 229, California',
        view_map:'',
        event_btn:'Join This Event',
    },

    {
        date:'12',
        month:'April',
        year:'2019',
        event_title:'Experts Collaborations',
        event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
        location:'Gonaomanan Street 229, California',
        view_map:'',
        event_btn:'Join This Event',
    },

    {
        date:'12',
        month:'April',
        year:'2019',
        event_title:'Experts Collaborations',
        event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
        location:'Gonaomanan Street 229, California',
        view_map:'',
        event_btn:'Join This Event',
    },

    {
        date:'12',
        month:'April',
        year:'2019',
        event_title:'Experts Collaborations',
        event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
        location:'Gonaomanan Street 229, California',
        view_map:'',
        event_btn:'Join This Event',
    }


]

const ProgramsEvent = ({children}) => {
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
            </MainLayout>
        </div>
    )
}

export default ProgramsEvent