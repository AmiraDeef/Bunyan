import React from 'react'
import { Outlet } from 'react-router-dom'
 function UserPage() {
  return (
    <section className='py-4' >
  
    <Outlet  />

    </section>
  )
}
export default UserPage