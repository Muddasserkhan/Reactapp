import React from 'react'
import {Link} from "react-router-dom";

const Menu = ({menu}) => {
    return (
        <>
            <ul className="navbar-nav gap-3">
                {
                    menu.map((menu, index) => (
                        <li className="nav-item" key={index}>
                            <Link className="nav-link text-white" to={menu.navLink}>
                                {menu.menu_item}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Menu
