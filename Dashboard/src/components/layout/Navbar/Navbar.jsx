import Logo from "../../../assets/axis-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faX, faBell } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Style from './Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="d-flex justify-content-between align-items-center ">
                    <div className={Style.NavLogo} className='d-flex px-5'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='d-flex px-5 align-items-center' >
                        <FontAwesomeIcon icon={faBell} />

                        <div class="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Supper Admin
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </nav>

        </>
    )
}