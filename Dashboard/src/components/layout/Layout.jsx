import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <Navbar></Navbar>
            <div className="row d-flex">

                <div className="col-3">
                    <Sidebar></Sidebar>

                </div>
                <main className="col-9"><Outlet/></main>
            </div>

        </>
    )
}
