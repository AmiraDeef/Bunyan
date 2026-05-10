import Logo from "../../../assets/axis-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faX, faBell } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Style from './Navbar.module.css'

export default function Navbar({ role }) {
    return (
        <>
            <nav>
                <div className="d-flex justify-content-between align-items-center ">
                    <div className={Style.NavLogo} className='d-flex px-5'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className={`d-flex px-5 align-items-center ${Style.rightSide}`} >
                        <button className="position-relative border-0  bg-transparent">  
                            <FontAwesomeIcon icon={faBell}/>

                            <span className={`position-absolute top-20 start-80 translate-middle badge rounded-pill ${Style.badgeNoti}`}>
                               0
                            </span></button>


                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Supper Admin
                            </button>

                        </div>

                    </div>
                </div>

            </nav>

        </>
    )
}