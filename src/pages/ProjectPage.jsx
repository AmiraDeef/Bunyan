import React from 'react'
import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
 function ProjectPage() {
  // const [active,setActive]=useState(false)
  const active=useOutletContext()
  return (
    <section className='py-4' >
  
   <Outlet context={ active} />

    </section>
  )
}
export default ProjectPage