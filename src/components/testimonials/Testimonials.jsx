import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/AV1.jpg'
import AVTR2 from '../../assets/AV2.jpg'
import AVTR3 from '../../assets/AV3.jpg'

// import Swiper core and required modules
import {  Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';




const data=[
  {
    avatar:1,
    image:AVTR3,
  name:'Anas Kassbi',
  job:'Security Analyst at AXA',
  review:'His technical skills are remarkable, and he’s always eager to share his knowledge. We’ve been cooperating since the very beginning of my ENSA journey',
}, 
{
  avatar:2,
  image:AVTR2,
  name:'AROUINI Youssef',
  job:'Robotic Process Automation Engineer at AFDTech',
  review:"A true teamplayer, Creative and always right on schedule, working with him is really amusing ",
}, 
{
  avatar:3,
  image:AVTR1,
  name:'ECHCHAD EL Mehdi',
  job:'Full Stack engineer at ABALSIA',
  review:'We have been working together since 2017 on several IT and non-IT projects, and we were always very pleased with the final product',
}
]


const Testemonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Colleagues</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
        {
          data.map(({avatar,image,name,job,review})=>{
            return(
            <SwiperSlide key={avatar} className="testimonial">
            <div className="client__avatar">
              <img src={image} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__job'>{job}</small>
            <small className='client__review'>{review}</small>
          </SwiperSlide>

            )})
        }
      
      </Swiper>
    </section>
  )
}

export default Testemonials