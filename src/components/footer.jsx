import React from 'react'

const Footer = () => {

const imagePath = process.env.PUBLIC_URL + '/images/icon.png';

const customStyle = {
    backgroundImage: `url(${imagePath})`,
    backgroundSize: '28%',
    backgroundPosition: '0%',
    backgroundRepeat: 'no-repeat',
}


return (
    <>
        <footer className="footer border-bottom border-dark border-5" style={customStyle}>
            <div className="container">
                <div className="pt-5">
                    <div className="row justify-content-around gap-lg-0 gap-sm-5 gap-4 text-md-start text-center">
                        <div className="col-lg-2 col-sm-5">
                            <h5 className="fw-bold">COMPANY</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Careers
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Prees
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Trust & Safety
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Terms of Services
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-5">
                            <h5 className="fw-bold">RESOURCES</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Help Center
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Hiring Headquarters
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Hiring Resources
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Our Blog
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Customer Stories
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Business Resources
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Payroll Services
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-5">
                            <h5 className="fw-bold">BROWSE</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Freelancers by Skill
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Freelancers in USA
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Freelancers in UK
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Freelancers in Canada
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Freelancers in Australia
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Jobs in USA
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Find Jobs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-5">
                            <h5 className="fw-bold">POPULAR JOBS</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Web Designer
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Copywriter
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Mobile Developer
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Admin Support
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Marketing
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Accounting
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Customer Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 mt-4 border-top">
                        <p className="m-0">© 2018 Findlancer Company AG</p>
                        <ul className="list-unstyled d-flex m-0">
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <img src={process.env.PUBLIC_URL + '/images/Instagram.png'} alt="Instagram" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <img src={process.env.PUBLIC_URL + '/images/Linkedin.png'} alt="Linkedin" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <img src={process.env.PUBLIC_URL + '/images/Facebook.png'} alt="Facebook" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <img src={process.env.PUBLIC_URL + '/images/Twitter.png'} alt="Twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
