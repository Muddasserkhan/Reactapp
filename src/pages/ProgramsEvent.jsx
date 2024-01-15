import React,{useRef} from 'react'
import MainLayout from '../layouts/MainLayout'
// import Event from '../components/Event'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'
import Searchfilter from '../components/Searchfilter'

const ProgramsEvent = ({eventData}) => {
    // const inputref = useRef(null);

    // const myfunction = () => {
    //     inputref.current.value="1000";
    // }

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
                            {/* <Searchfilter eventData={eventData}/> */}
                            <Searchfilter eventData={eventData} />
                        </div>
                        {/* <Event event = {eventData} /> */}
                        <div className="row">
                            <div className="col">
                                {/* <button onClick={myfunction}>Click</button> */}
                            </div>
                        </div>
                    </div>
                </section>
                <Newsletter />
            </MainLayout>
        </div>
    )
}

export default ProgramsEvent