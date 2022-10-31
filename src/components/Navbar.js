import React from 'react'
import Me from '../images/Me.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navContainer'>
      <img src={Me} alt="me" className='image' />
      <button className='homeButton'>Home</button>
      <button className='projectsButton'>Projects</button>
      <button className='contactButton'>Contact</button>
    </div>
  )
}

export default Navbar

