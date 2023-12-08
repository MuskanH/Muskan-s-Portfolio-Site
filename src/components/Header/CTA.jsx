import React from 'react'
import CV from "../../assets/MUSKAN CHAVDA RESUME.pdf"

const CTA = () => {
  return (
    <div className='CTA'>
      <a href= {CV} className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
