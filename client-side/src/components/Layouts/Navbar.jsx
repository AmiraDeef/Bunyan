import React from 'react'
import logo from "../../assets/Logo.png"
import './Navbar.css'




function Navbar() {
  return (
    <>
      <nav className='my-4'>
        <div className='container'>
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="tabs d-flex align-items-center  ">


              <ul className='d-flex list-unstyled gap-4 mx-4 text-decoration-none '>
                <li>
                  <a href="#" className="text-decoration-none  text-dark fw-medium">Home</a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none  text-dark fw-medium">Find Jobs</a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none  text-dark fw-medium">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none  text-dark fw-medium">Contact</a>
                </li>

              </ul>

              <div className="nav-btns d-flex  align-items-center gap-3 mb-3 ms-5">
                <button className='border-0 text-decoration-underline bg-transparent'> Register</button>
                <button className=' login rounded-2 border-0 '> Login</button>

              </div>
            </div>


          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar