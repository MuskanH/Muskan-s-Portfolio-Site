import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/muskan-chavda-7308a31a3/' target='blank'>< LinkedInIcon/></a>
      <a href='https://www.behance.net/muskan_chavda' target='blank'><DesignServicesIcon/></a>
      <a href='https://github.com/MuskanH?tab=repositories' target='blank'><GitHubIcon/></a>
    </div>
  )
}

export default HeaderSocials
