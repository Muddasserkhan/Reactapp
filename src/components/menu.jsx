import React from 'react'

const Menu = ({menu}) => {
    return (
        <>
            {
                menu.map((menu, index) => (
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                {menu.menu_item}
                            </a>
                        </li>
                    </ul>
                ))
            }
        </>
    )
}

export default Menu
