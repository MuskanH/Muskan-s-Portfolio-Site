import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../assets/shivam dp.png"
import AVTR2 from "../../assets/avatar2.jpg"

import { Pagination, Navigation } from 'swiper/modules';

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' modules={[Pagination, Navigation]} spaceBetween={40} slidesPerView={1} pagination={{clickable: true}} navigation={{clickable: true}}>
        <SwiperSlide className='testimonial'>
            <div className='client__avatar'>
                <img src= {AVTR1}/>
            </div>
            <h5 className='client__name'> <a href='https://www.linkedin.com/in/shivamchhuneja/'>Shivam Chhuneja</a></h5>
            <small className='client__review'>"Her designs are simple yet eye catching. Always a pleasure to work with her!"</small>
        </SwiperSlide>

        {/* <SwiperSlide className='testimonial'>
            <div className='client__avatar'>
                <img src= {AVTR2}/>
            </div>
            <h5 className='client__name'>Shivam Chhuneja</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, non!</small>
        </SwiperSlide> */}

      </Swiper>
    </section>
  )
}

export default Testimonials
