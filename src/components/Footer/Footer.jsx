import React from 'react'
import "./Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>MUSKAN</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://twitter.com/the_sentisocial'><TwitterIcon/></a>
        <a href='https://www.linkedin.com/in/muskan-chavda-7308a31a3/'><LinkedInIcon/></a>
      </div>
    </footer>
  )
}

export default Footer
