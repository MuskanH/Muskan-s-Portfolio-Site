import React from 'react'
import "./Experience.css"
import VerifiedIcon from '@mui/icons-material/Verified';

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Tech Stack</h2>

        <div className='experience experience__container'>
            <div className='experience__frontend'>
             <h3>Frontend Development</h3>
             <div className='experience__content'>
                <article className='experience__details'>
                    < VerifiedIcon className='experience__icons'/>
                    <h4>HTML</h4>
                </article>

                <article className='experience__details'>
                    < VerifiedIcon  className='experience__icons'/>
                    <h4>CSS</h4>
                </article>

                <article className='experience__details'>
                    < VerifiedIcon  className='experience__icons'/>
                    <h4>Javascript</h4>
                </article>

                <article className='experience__details'>
                    < VerifiedIcon  className='experience__icons'/>
                    <h4>Bootstrap</h4>
                </article>

                <article className='experience__details'>
                    < VerifiedIcon  className='experience__icons'/>
                    <h4>React</h4>
                </article>
             </div>
            </div>

            <div className='experience__backend'>
            <h3>Backend Development</h3>
             <div className='experience__content'>
                <article className='experience__details'>
                    < VerifiedIcon  className='experience__icons'/>
                    <h4>MongoDB</h4>
                </article>

                <article className='experience__details'>
                    < VerifiedIcon  className='experience__icons'/>
                    <h4>ExpressJS</h4>
                </article>

                <article className='experience__details'>
                    < VerifiedIcon  className='experience__icons'/>
                    <h4>NodeJS</h4>
                </article>
             </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
