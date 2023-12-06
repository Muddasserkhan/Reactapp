import React from 'react'
import {Link} from "react-router-dom";

const mainmenudata = [
    {
        mainmenuitem:'COMPANY',
        submMenu: [
            {
                text: 'About Us',
                link: '/about-us',
            },
            {
                text: 'Contact',
                link: '/contact',
            },
            {
                text: 'Prees',
                link: '/prees',
            },
            {
                text: 'Trust & Safety',
                link: '/trust-&-safety',
            },
            {
                text: 'Terms of Services',
                link: '/terms-of-services',
            },
            {
                text: 'Privacy Policy',
                link: '/privacy-policy',
            }
        ]
    },
    {
        mainmenuitem:'RESOURCES',
        submMenu: [
            {
                text: 'Help Center',
                link: '/help-center',
            },
            {
                text: 'Hiring Headquarters',
                link: '/hiring-headquarters',
            },
            {
                text: 'Hiring Resources',
                link: '/hiring-resources',
            },
            {
                text: 'Our Blog',
                link: '/our-blog',
            },
            {
                text: 'Customer Stories',
                link: '/customer-stories',
            },
            {
                text: 'Business Resources',
                link: '/business-resources',
            },
            {
                text: 'Payroll Services',
                link: '/payroll-services',
            }
        ]
    },
    {
        mainmenuitem:'BROWSE',
        submMenu: [
            {
                text: 'Freelancers by Skill',
                link: '/freelancers-by-skill',
            },
            {
                text: 'Freelancers in USA',
                link: '/freelancers-in-usa',
            },
            {
                text: 'Freelancers in UK',
                link: '/freelancers-in-uk',
            },
            {
                text: 'Freelancers in Canada',
                link: '/freelancers-in-canada',
            },
            {
                text: 'Freelancers in Australia',
                link: '/freelancers-in-australia',
            },
            {
                text: 'Jobs in USA',
                link: '/jobs-in-usa',
            },
            {
                text: 'Find Jobs',
                link: '/find-jobs',
            }
        ]
    },
    {
        mainmenuitem:'POPULAR JOBS',
        submMenu: [
            {
                text: 'Web Designer',
                link: '/web-designer',
            },
            {
                text: 'Copywriter',
                link: '/copywriter',
            },
            {
                text: 'Mobile Developer',
                link: '/mobile-developer',
            },
            {
                text: 'Admin Support',
                link: '/admin-support',
            },
            {
                text: 'Marketing',
                link: '/marketing',
            },
            {
                text: 'Accounting',
                link: '/accounting',
            },
            {
                text: 'Customer Service',
                link: '/customer-service',
            }
        ]
    }
]

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

                        {
                            mainmenudata.map((menu, index) => (
                                <div className="col-lg-2 col-sm-5" key={index}>
                                    <h5 className="fw-bold">{menu.mainmenuitem}</h5>
                                    <ul className="nav flex-column">
                                        {
                                            menu.submMenu.map((submMenu, subindex) => (
                                                <li className="nav-item mb-2" key={subindex}>
                                                    <Link to={submMenu.link} className="nav-link p-0 text-body-secondary">
                                                        {submMenu.text}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                        
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 mt-4 border-top">
                        <p className="m-0">© 2018 Findlancer Company AG</p>
                        <ul className="list-unstyled d-flex m-0">
                            <li className="ms-3">
                                <Link className="link-body-emphasis" to={"#"}>
                                    <img src={process.env.PUBLIC_URL + '/images/Instagram.png'} alt="Instagram" />
                                </Link>
                            </li>
                            <li className="ms-3">
                                <Link className="link-body-emphasis" to={"#"}>
                                    <img src={process.env.PUBLIC_URL + '/images/Linkedin.png'} alt="Linkedin" />
                                </Link>
                            </li>
                            <li className="ms-3">
                                <Link className="link-body-emphasis" to={"#"}>
                                    <img src={process.env.PUBLIC_URL + '/images/Facebook.png'} alt="Facebook" />
                                </Link>
                            </li>
                            <li className="ms-3">
                                <Link className="link-body-emphasis" to={"#"}>
                                    <img src={process.env.PUBLIC_URL + '/images/Twitter.png'} alt="Twitter" />
                                </Link>
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
