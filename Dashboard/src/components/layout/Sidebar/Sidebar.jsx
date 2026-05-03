import React from 'react'
import Style from "./Sidebar.module.css";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <aside className={`contianer ${Style.sidebar}`}>
                <div className='d-flex flex-column gap-3 p-4 text-white text-decoration-none vh-100 '>
                    <ul>
                        <li>
                            <NavLink to="/users">USER MANGMENT</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Project MANGMENT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/developers">DEVELOPERS MANGMENT</NavLink>
                        </li>
                        <li>
                            <NavLink to="">WEBSITE CMS </NavLink>
                        </li>
                        <li>
                            <NavLink to="">Live Chat</NavLink>
                        </li>
                        <li>
                            <NavLink to=""></NavLink>
                        </li>
                    </ul>
                </div>

            </aside>


        </>
    )
}
