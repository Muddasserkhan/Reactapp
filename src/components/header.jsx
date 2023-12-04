import React from 'react'
import Menu from './menu'

const menuData = [
    {
        menu_item: 'About Us',
    },
    {
        menu_item: 'Find Talent',
    },
    {
        menu_item: 'Find Work',
    },
    {
        menu_item: 'How it Works',
    },
    {
        menu_item: 'Log in',
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
                                <a className="navbar-brand" href="#">
                                    <img src={process.env.PUBLIC_URL + '/images/Logo.png'}  alt="Logo" class="logo"/>
                                </a>
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
                                                    <a className="dropdown-item" href="#">
                                                    Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                    Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                    Something else here
                                                    </a>
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
