import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/Frame1.png"
import IMG2 from "../../assets/Frame2.png"
import IMG3 from "../../assets/Frame3.png"
import IMG4 from "../../assets/Frame 4.png"
import IMG5 from "../../assets/Frame 5.png"
import IMG6 from "../../assets/Frame 6.png"
import IMG7 from "../../assets/Frame7.png"
import IMG8 from "../../assets/Frame8.png"
import IMG9 from "../../assets/Frame9.png"
import IMG10 from "../../assets/Frame10.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG7}/>
        </div>
        <h3>The Kuka</h3>
        <div className='portfolio__item-cta'>
        {/* <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a> */}
        <a href='https://thekuka.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG9}/>
        </div>
        <h3>Divyajivan</h3>
        <div className='portfolio__item-cta'>
        {/* <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a> */}
        <a href='https://sivanandashram.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG5}/>
        </div>
        <h3>Radiant Planks Website</h3>
        <div className='portfolio__item-cta'>
        {/* <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a> */}
        <a href='https://radiantplanks.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

       <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG5}/>
        </div>
        <h3>Radiant Planks CRM</h3>
        <div className='portfolio__item-cta'>
        {/* <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a> */}
        <a href='https://www.linkedin.com/posts/muskan-chavda-7308a31a3_inventory-management-and-crm-software-for-activity-7283772764241481728-MsJn?utm_source=social_share_sheet&utm_medium=member_desktop_web' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

       <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG6}/>
        </div>
        <h3>DR. CRM Software</h3>
        <div className='portfolio__item-cta'>
        {/* <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a> */}
        <a href='https://www.linkedin.com/posts/muskan-chavda-7308a31a3_crm-application-for-doctors-key-features-activity-7283784449492725760-PQbW?utm_source=share&utm_medium=member_desktop' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

       <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG6}/>
        </div>
        <h3>DR. CRM Website</h3>
        <div className='portfolio__item-cta'>
        {/* <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a> */}
        <a href='https://www.docschedule.in/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG10}/>
        </div>
        <h3>IELTS Visa</h3>
        <div className='portfolio__item-cta'>
        {/* <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a> */}
        <a href='https://ieltsvisa.in/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG8}/>
        </div>
        <h3>ERP CA</h3>
        <div className='portfolio__item-cta'>
        {/* <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a> */}
        {/* <a href='https://www.linkedin.com/posts/muskan-chavda-7308a31a3_crm-application-for-doctors-key-features-activity-7283784449492725760-PQbW?utm_source=share&utm_medium=member_desktop' className='btn btn-primary' target='_blank'>Live Demo</a> */}
        </div>
       </article>

       <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG4}/>
        </div>
        <h3>E-commerce website</h3>
        <div className='portfolio__item-cta'>
       
        <a href='https://www.kavimports.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

       <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src= {IMG1}/>
        </div>
        <h3>Wanderlust- Hotel booking site</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com/MuskanH/Wanderlust-project' className='btn' target='_blank'>GitHub</a>
        <a href='https://wanderlust-project-3ktz.onrender.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

       <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG2}/>
        </div>
        <h3>Netflix Clone</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com/MuskanH/Netflix-clone' className='btn' target='_blank'>GitHub</a>
        <a href='https://www.linkedin.com/posts/muskan-chavda-7308a31a3_netflixclone-apis-frontenddeveloper-activity-7138429011587661824-FmFH?utm_source=share&utm_medium=member_desktop' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>

       <article className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={IMG3}/>
        </div>
        <h3>Music App</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com/MuskanH/Spotify-clone' className='btn' target='_blank'>GitHub</a>
        <a href='https://www.linkedin.com/posts/muskan-chavda-7308a31a3_webdev-frontend-spotify-activity-7098703162643021824-nKdA?utm_source=share&utm_medium=member_desktop' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
       </article>


      </div>
    </section>
  )
}

export default Portfolio
