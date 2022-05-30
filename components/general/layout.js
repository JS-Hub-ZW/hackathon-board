import React from 'react'
import Navbar from "./navbr"

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
