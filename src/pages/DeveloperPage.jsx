import { Outlet, useOutletContext } from 'react-router-dom'
import { useState } from 'react'

 function DeveloperPage() {
  
 const active=useOutletContext()
 
    return (
      <section className='py-4' >
    
     <Outlet context={ active} />
  
      </section>
    
  )
}
export default DeveloperPage