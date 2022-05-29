import React from 'react'
import NavBar from "./navbar"

export default function Layout({children}) {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}
