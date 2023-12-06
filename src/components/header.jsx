import React from 'react'
import Menu from './Menu'
import {Link} from "react-router-dom";

const menuData = [
    {
        menu_item: 'About Us',
        navLink:'/about-us',
    },
    {
        menu_item: 'Find Talent',
        navLink:'/find-talent',
    },
    {
        menu_item: 'Find Work',
        navLink:'/find-work',
    },
    {
        menu_item: 'How it Works',
        navLink:'/how-it-works',
    },
    {
        menu_item: 'Log in',
        navLink:'/login',
    },
] 

const Header = () => {
  return (
    <div>
        <>
        <header>
            <div className="bg-dark --bs-purple">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid p-0">
                                <Link className="navbar-brand" to={'/'}>
                                    <img src={process.env.PUBLIC_URL + '/images/Logo.png'}  alt="Logo" className="logo"/>
                                </Link>
                                <button
                                    className="navbar-toggler bg-light"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarText"
                                    aria-controls="navbarText"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse justify-content-sm-end gap-5"
                                    id="navbarText"
                                >
                                    <Menu menu = {menuData} />

                                    <span className="navbar-btn">
                                        <div className="dropdown">
                                            <button
                                            className="btn dropdown-toggle btn-outline-light"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            >
                                            Join As A Freelancer
                                            </button>
                                            <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                            >
                                                <li>
                                                    <Link className="dropdown-item" to={'/as'}>
                                                    Action
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={'/as'}>
                                                    Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={'/as'}>
                                                    Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
        </header>
        </>
    </div>
  )
}

export default Header
