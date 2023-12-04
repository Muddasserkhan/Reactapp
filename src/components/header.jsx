import React from 'react'


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
                                    <ul className="navbar-nav gap-3">
                                    <li className="nav-item">
                                        <a
                                        className="nav-link text-white active fw-semibold border-bottom"
                                        aria-current="page"
                                        href="#"
                                        >
                                        About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                        Find Talent
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                        Find Work
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                        How it Works
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">
                                        Log in
                                        </a>
                                    </li>
                                    </ul>
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
