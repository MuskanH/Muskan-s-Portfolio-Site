import React from 'react'
import "./About.css"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import GIF from "../../assets/coding.gif"

const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>

     <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src= {GIF} alt=''/>
        </div>
      </div>

    <div className='about__content'>
      <div className='about__cards'>

      <artcle className="about__card">
          <CodeOutlinedIcon className='about__icon'/>
          <h5>Tech Stack</h5>
          <small>MERN Stack</small>
        </artcle>

        <artcle className="about__card">
          <FilePresentOutlinedIcon className='about__icon'/>
          <h5>Projects</h5>
          <small>Projects done using the popular technologies</small>
        </artcle>

        <artcle className="about__card">
          <PeopleAltOutlinedIcon className='about__icon'/>
          <h5>Clients</h5>
          <small>UI design work</small>
        </artcle>

      </div>

      <p>Hello! I'm Muskan, a Frontend Web Developer and UI Designer passionate about turning visual ideas into captivating online experiences.
      With a blend of code and creativity, I build user-friendly websites that not only look great but also work seamlessly. <br></br><br></br>
      From concept to code, I bring designs to life, ensuring they're not just visually appealing but also user-centric.
      </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>

     </div>
    </section>
  )
}

export default About
