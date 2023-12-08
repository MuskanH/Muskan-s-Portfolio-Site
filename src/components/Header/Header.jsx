import React from 'react'
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Mee.jpg"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='intro'>
        <h4>Hello I'm</h4>
        <h1>Muskan Chavda</h1>
        <h4>Frontend Developer</h4>
        <CTA/>
        </div>
       
       

        {/* <div className='me'>
           <img src= {ME} alt="" className='meImg'></img>
        </div> */}
       <HeaderSocials/>
       <a href='#contact' className='scroll__down'>Scroll Down</a>
       

      </div>
    </header>
  )
}

export default Header
