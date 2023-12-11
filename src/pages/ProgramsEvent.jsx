import React,{useState,useEffect} from 'react'
import MainLayout from '../layouts/MainLayout'
// import Event from '../components/Event'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'
// import {eventData} from '../EventData';
import Searchfilter from '../components/Searchfilter'

// import ClassComponent from '../components/ClassComponent'
import FunctionComponent from '../components/FunctionComponent'

const ProgramsEvent = ({eventData}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);
    return (
        <div>
            <MainLayout>
                <Banner />
                <section className="section2 py-5 px-md-0 px-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-md-start align-items-center mb-4">
                                <h2>Discover All The Evets</h2>
                            </div>
                            <Searchfilter eventData={eventData}/>
                        </div>

                        {/* <Event event = {eventData} /> */}
                        <FunctionComponent count={count} count2={count2}/>
                        <button onClick={()=>setCount(count+1)}>Count 1</button>
                        <button onClick={()=>setCount2(count2+1)}>Count 2</button>
                    </div>
                </section>
                <Newsletter />
            </MainLayout>
        </div>
    )
}

export default ProgramsEvent