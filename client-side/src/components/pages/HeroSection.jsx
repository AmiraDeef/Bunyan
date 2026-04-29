import React from 'react'
import heroimg from "../../assets/Card.png"


function HeroSection() {
  return (
    <>
      <div className="container">
        <div className=" py-5 d-flex justify-content-between">
          <div className="info">
            <h1>The <span>#1</span> Job Board for Hiring or Find your next job in <span>Egypt</span></h1>
            <p className='text-muted'>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
          </div>

          <div className="hero-img">
            <img src={heroimg} alt="" />
          </div></div>




      </div>


    </>
  )
}

export default HeroSection