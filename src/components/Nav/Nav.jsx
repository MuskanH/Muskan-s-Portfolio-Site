import React, { useState } from 'react'
import "./Nav.css";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav className='Navicons'>
      <a href='#' onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>Home</a>
      <a href='#about' onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>About</a>
      <a href='#experience'  onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""} >Experience</a>
      <a href='#portfolio'  onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}>Portfolio</a>
      <a href='#contact'  onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>Contact</a>
    </nav>
  )
}

export default Nav
