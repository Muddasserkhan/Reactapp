import React from 'react'
import {Link} from "react-router-dom";

const Menu = ({menu}) => {
    return (
        <>
            {
                menu.map((menu, index) => (
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to={menu.navLink}>
                                {menu.menu_item}
                            </Link>
                        </li>
                    </ul>
                ))
            }
        </>
    )
}

export default Menu
