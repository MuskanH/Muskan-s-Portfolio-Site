import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/Frame1.png"
import IMG2 from "../../assets/Frame2.png"
import IMG3 from "../../assets/Frame3.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
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
