import React from 'react'
import Main_lauout from '../layouts/main_lauout'

const Programs_event = ({children}) => {
    const circle = {
        width:'450px',
        height:'450px',

        '@media only screen and (max-width: 570px)': {
            width: '350px',
            height: '350px', 
        }
    }
  return (
    <div>
        <Main_lauout>

            <section className="section1 px-0">
                <div className="bg-dark py-5">
                    <div className="container">
                    <div className="row">
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
                        <div className="col-lg-6">
                        <div className="d-flex flex-column justify-content-center h-100 text-lg-start text-sm-center text-center">
                            <div className="right_top mb-md-5 mb-sm-4 mb-4">
                            <p className="m-0 p-0 text-light pb-2">UPCOMING EVENTS</p>
                            <h1 className="m-0 p-0 text-white pb-2">
                                ANNUAL MEET UP AND <br />
                                EXPERTS COLLABORATIONS
                            </h1>
                            <div className="location d-flex align-items-center gap-1 justify-content-lg-start justify-content-sm-center justify-content-center">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="#fff"
                                className="bi bi-geo-alt-fill"
                                viewBox="0 0 16 16"
                                >
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                <p className="m-0 p-0 text-white">
                                Findlancer Terrace, Gondisuli, California
                                </p>
                            </div>
                            </div>
                            <div className="right_bottom">
                            <a href="#" classN className="btn btn-outline-light"ame="btn btn-light join_event">
                                Join This Event
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="section2 py-5 px-md-0 px-3">
                <div className="container">
                    <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h2>Discover All The Evets</h2>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <form className="row justify-content-center gap-3 mb-5">
                        <div className="d-flex justify-content-center flex-md-row justify-content-center gap-4 flex-lg-row flex-md-column flex-column">
                            <div className="form-group d-flex gap-3 justify-content-center">
                            <label htmlFor="inputEmail3" className="col-form-label m-0 px-0">
                                Select Month
                            </label>
                            <div className="px-0">
                                <select
                                className="form-select form-select-md"
                                aria-label=".form-select-lg example"
                                >
                                <option selected="">April</option>
                                <option value={1}>January</option>
                                <option value={2}>Febraury</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>Octuber</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                                </select>
                            </div>
                            </div>
                            <div className="form-group d-flex gap-3 justify-content-center">
                            <label htmlFor="inputPassword3" className="col-form-label px-0">
                                Select Year
                            </label>
                            <div className="px-0">
                                <select
                                className="form-select form-select-md"
                                aria-label=".form-select-lg example"
                                >
                                <option selected="">2023</option>
                                <option value={2017}>2017</option>
                                <option value={2018}>2018</option>
                                <option value={2019}>2019</option>
                                <option value={2020}>2020</option>
                                <option value={2021}>2021</option>
                                <option value={2022}>2022</option>
                                <option value={2023}>2023</option>
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                                <option value={2026}>2026</option>
                                <option value={2027}>2027</option>
                                <option value={2028}>2028</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    {/* 1st */}
                    <div className="row p-4 border border-1 align-items-center mb-4 gap-md-0 gap-sm-4 gap-4">
                        <div className="col-md-2 p-0 m-0">
                            <div className="date_cal">
                                <div className="d-inline-block text-center">
                                    <div className="MK_bgcolor text-center border border-1">
                                    <div className="px-4 py-2 bg-dark">
                                        <h2 className="p-0 m-0 text-white">12</h2>
                                        <p className="p-0 m-0 text-white">APRIL</p>
                                    </div>
                                    <p className="p-0 m-0 MK_bgcolor text-dark">2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 p-0 m-0">
                            <div className="m-0">
                            <h4 className="m-0 p-0">Experts Collaborations</h4>
                            <p className="m-0 p-0 my-2 grey_color">
                                With supporting text below as a natural lead-in to additional
                                content. sWith supporting text below as a natural lead-in to
                                additional content.
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
                                Gonaomanan Street 229, California
                            </span>
                            <span>
                                <a href="#" className='btn p-0 text-primary'>View Map</a>
                            </span>
                            </div>
                        </div>
                        <div className="col-md-3 text-md-end p-0 m-0">
                            <a href="#" cl className="btn btn-outline-dark"assName="puple_outline_btn btn">
                            Join This Event
                            </a>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="row p-4 border border-1 align-items-center mb-4 gap-md-0 gap-sm-4 gap-4 mb-4">
                    <div className="col-md-2 p-0 m-0">
                        <div className="date_cal">
                        <div className="d-inline-block text-center">
                            <div className="MK_bgcolor text-center border border-1">
                            <div className="px-4 py-2 bg-dark">
                                <h2 className="p-0 m-0 text-white">16</h2>
                                <p className="p-0 m-0 text-white">APRIL</p>
                            </div>
                            <p className="p-0 m-0 MK_bgcolor text-dark">2019</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-7 p-0 m-0">
                        <div className="m-0">
                        <h4 className="m-0 p-0">Experts Collaborations</h4>
                        <p className="m-0 p-0 my-2 grey_color">
                            With supporting text below as a natural lead-in to additional
                            content. sWith supporting text below as a natural lead-in to
                            additional content.
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
                            Gonaomanan Street 229, California
                        </span>
                        <span>
                            <a href="#" className='btn p-0 text-primary'>View Map</a>
                        </span>
                        </div>
                    </div>
                    <div className="col-md-3 text-md-end p-0 m-0">
                        <a href="#" className="btn btn-outline-dark">
                        Join This Event
                        </a>
                        <p className="px-2 text-danger mt-2">Limited 3 seat left!</p>
                    </div>
                    </div>
                    {/* 3rd */}
                    <div className="row p-4 border border-1 align-items-center mb-4 gap-md-0 gap-sm-4 gap-4 mb-4">
                    <div className="col-md-2 p-0 m-0">
                        <div className="date_cal">
                        <div className="d-inline-block text-center">
                            <div className="MK_bgcolor text-center border border-1">
                            <div className="px-4 py-2 bg-dark">
                                <h2 className="p-0 m-0 text-white">19</h2>
                                <p className="p-0 m-0 text-white">APRIL</p>
                            </div>
                            <p className="p-0 m-0 MK_bgcolor text-dark">2019</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-7 p-0 m-0">
                        <div className="m-0">
                        <h4 className="m-0 p-0">Experts Collaborations</h4>
                        <p className="m-0 p-0 my-2 grey_color">
                            With supporting text below as a natural lead-in to additional
                            content. sWith supporting text below as a natural lead-in to
                            additional content.
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
                            Gonaomanan Street 229, California
                        </span>
                        <span>
                            <a href="#" className='btn p-0 text-primary'>View Map</a>
                        </span>
                        </div>
                    </div>
                    <div className="col-md-3 text-md-end p-0 m-0">
                        <a href="#" className="btn disabled">
                        Closed
                        </a>
                    </div>
                    </div>
                    {/* 4th */}
                    <div className="row p-4 border border-1 align-items-center mb-4 gap-md-0 gap-sm-4 gap-4 mb-4">
                    <div className="col-md-2 p-0 m-0">
                        <div className="date_cal">
                        <div className="d-inline-block text-center">
                            <div className="MK_bgcolor text-center border border-1">
                            <div className="px-4 py-2 bg-dark">
                                <h2 className="p-0 m-0 text-white">23</h2>
                                <p className="p-0 m-0 text-white">APRIL</p>
                            </div>
                            <p className="p-0 m-0 MK_bgcolor text-dark">2019</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-7 p-0 m-0">
                        <div className="m-0">
                        <h4 className="m-0 p-0">Experts Collaborations</h4>
                        <p className="m-0 p-0 my-2 grey_color">
                            With supporting text below as a natural lead-in to additional
                            content. sWith supporting text below as a natural lead-in to
                            additional content.
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
                            Gonaomanan Street 229, California
                        </span>
                        <span>
                            <a href="#" className='btn p-0 text-primary'>View Map</a>
                        </span>
                        </div>
                    </div>
                    <div className="col-md-3 text-md-end p-0 m-0">
                        <a href="#" cl className="btn btn-outline-dark"assName="puple_outline_btn btn">
                        Join This Event
                        </a>
                    </div>
                    </div>
                    {/* 5th */}
                    <div className="row p-4 border border-1 align-items-center mb-4 gap-md-0 gap-sm-4 gap-4 mb-4">
                    <div className="col-md-2 p-0 m-0">
                        <div className="date_cal">
                        <div className="d-inline-block text-center">
                            <div className="MK_bgcolor text-center border border-1">
                            <div className="px-4 py-2 bg-dark">
                                <h2 className="p-0 m-0 text-white">25</h2>
                                <p className="p-0 m-0 text-white">APRIL</p>
                            </div>
                            <p className="p-0 m-0 MK_bgcolor text-dark">2019</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-7 p-0 m-0">
                        <div className="m-0">
                        <h4 className="m-0 p-0">Experts Collaborations</h4>
                        <p className="m-0 p-0 my-2 grey_color">
                            With supporting text below as a natural lead-in to additional
                            content. sWith supporting text below as a natural lead-in to
                            additional content.
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
                            Gonaomanan Street 229, California
                        </span>
                        <span>
                            <a href="#" className='btn p-0 text-primary'>View Map</a>
                        </span>
                        </div>
                    </div>
                    <div className="col-md-3 text-md-end p-0 m-0">
                        <a href="#" cl className="btn btn-outline-dark"assName="puple_outline_btn btn">
                        Join This Event
                        </a>
                    </div>
                    </div>
                    {/* 6th */}
                    <div className="row p-4 border border-1 align-items-center  mb-4 gap-md-0 gap-sm-4 gap-4 mb-4">
                    <div className="col-md-2 p-0 m-0">
                        <div className="date_cal">
                        <div className="d-inline-block text-center">
                            <div className="MK_bgcolor text-center border border-1">
                            <div className="px-4 py-2 bg-dark">
                                <h2 className="p-0 m-0 text-white">26</h2>
                                <p className="p-0 m-0 text-white">APRIL</p>
                            </div>
                            <p className="p-0 m-0 MK_bgcolor text-dark">2019</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-7 p-0 m-0">
                        <div className="m-0">
                        <h4 className="m-0 p-0">Experts Collaborations</h4>
                        <p className="m-0 p-0 my-2 grey_color">
                            With supporting text below as a natural lead-in to additional
                            content. sWith supporting text below as a natural lead-in to
                            additional content.
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
                            Gonaomanan Street 229, California
                        </span>
                        <span>
                            <a href="#" className='btn p-0 text-primary'>View Map</a>
                        </span>
                        </div>
                    </div>
                    <div className="col-md-3 text-md-end p-0 m-0">
                        <a href="#" cl className="btn btn-outline-dark"assName="puple_outline_btn btn">
                        Join This Event
                        </a>
                    </div>
                    </div>
                    <div className="grid-pagination pb-md-5">
                    <div className="container">
                        <div className="row pt-3">
                        <div className="col d-inline-flex justify-content-center ">
                            <div className="controls d-inline-flex align-items-center">
                            <nav aria-label="...">
                                <ul className="pagination">
                                <li className="page-item">
                                    <a
                                    className="page-link"
                                    style={{ borderRadius: "25px 0px 0px 25px" }}
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-chevron-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                        />
                                    </svg>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                    style={{ borderRight: 0, backgroundColor: "#eeeeee" }}
                                    className="page-link text-dark"
                                    href="#"
                                    >
                                    1
                                    </a>
                                </li>
                                <li className="page-item px-0">
                                    <a
                                    style={{
                                        borderRight: 0,
                                        borderLeft: 0,
                                        backgroundColor: "#eeeeee"
                                    }}
                                    className="page-link text-dark px-0"
                                    href="#"
                                    >
                                    of
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                    style={{ borderLeft: 0, backgroundColor: "#eeeeee" }}
                                    className="page-link text-dark"
                                    href="#"
                                    >
                                    10
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                    className="page-link"
                                    style={{ borderRadius: "0px 25px 25px 0px" }}
                                    href="#"
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-chevron-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                    </a>
                                </li>
                                </ul>
                            </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </Main_lauout>
    </div>
  )
}

export default Programs_event
