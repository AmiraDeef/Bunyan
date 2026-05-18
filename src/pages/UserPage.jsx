import React from 'react'
import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
function UserPage() {
   const active=useOutletContext()

  return (
    <section className='py-4' >

      <Outlet context={ active } />

    </section>
  )
}
export default UserPage