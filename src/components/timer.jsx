import React from 'react'

const Timer = () => {
    const circle = {
        width:'450px',
        height:'450px',

        '@media only screen and (max-width: 570px)': {
            width: '350px',
            height: '350px', 
        }
    }
    return (
        <>
            <div className="col-lg-6 mb-lg-0 mb-sm-5 mb-5">
                <div className="circle rounded-circle border border-5 mx-xl-auto d-flex flex-column justify-content-end gap-5 pb-5 mx-lg-0 mx-sm-auto" style={circle}>
                    <div className="timer gap-lg-3 gap-md-2 gap-sm-1 mx-auto d-flex justify-content-between align-items-center">
                    <div className="t_inner text-center">
                        <h3 className="p-0 m-0 text-white">17</h3>
                        <h5 className="p-0 m-0 text-white">Days</h5>
                    </div>
                    <div>
                        <h4 className="fw-semibold text-white">:</h4>
                    </div>
                    <div className="t_inner text-center">
                        <h3 className="p-0 m-0 text-white">08</h3>
                        <h5 className="p-0 m-0 text-white">Hours</h5>
                    </div>
                    <div>
                        <h4 className="fw-semibold text-white">:</h4>
                    </div>
                    <div className="t_inner text-center">
                        <h3 className="p-0 m-0 text-white">33</h3>
                        <h5 className="p-0 m-0 text-white">Minutes</h5>
                    </div>
                    <div>
                        <h4 className="fw-semibold text-white">:</h4>
                    </div>
                    <div className="t_inner text-center">
                        <h3 className="p-0 m-0 text-white">12</h3>
                        <h5 className="p-0 m-0 text-white">Seconds</h5>
                    </div>
                    </div>
                    <div className="date_cal text-center">
                    <div className="d-inline-block text-center">
                        <div className="bg-light text-center p-1 pb-0">
                        <div className="bg-dark px-4 py-2">
                            <h2 className="p-0 m-0 text-white">22</h2>
                            <p className="p-0 m-0 text-white">APRIL</p>
                        </div>
                        <p className="p-0 m-0">2019</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timer
