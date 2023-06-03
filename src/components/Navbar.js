import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'

export const Navbar = () => {
  return (
    <div className='nav'>
         <Link to='/'>Home</Link>
    <Link to='/profile'>Profile</Link>
    </div>
  )
}
