import React from 'react'
import './Testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    avatarName: 'Ernest Achiever',
    avatar: AVTR1,
    alt: 'Avatar One',
    rewiev: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mauris nisl. Nam tempus tortor sit amet turpis sollicitudin, vitae elementum mauris suscipit. Curabitur vitae venenatis lectus, eget malesuada diam. Ut tempus tincidunt turpis sed luctus.'
  },
  {
    id: 2,
    avatarName: 'Batuhan Acar',
    avatar: AVTR2,
    alt: 'Avatar Two',
    rewiev: 'Maecenas vel mauris nisl. Nam tempus tortor sit amet turpis sollicitudin, vitae elementum mauris suscipit. Curabitur vitae venenatis lectus, eget malesuada diam. Ut tempus tincidunt turpis sed luctus.'
  },
  {
    id: 3,
    avatarName: 'Metehan Acar',
    avatar: AVTR3,
    alt: 'Avatar Three',
    rewiev: 'Nam tempus tortor sit amet turpis sollicitudin, vitae elementum mauris suscipit. Curabitur vitae venenatis lectus, eget malesuada diam. Ut tempus tincidunt turpis sed luctus.'
  },
  {
    id: 4,
    avatarName: 'Veysel Acar',
    avatar: AVTR4,
    alt: 'Avatar Four',
    rewiev: 'Curabitur vitae venenatis lectus, eget malesuada diam. Ut tempus tincidunt turpis sed luctus.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, avatarName, avatar, alt, rewiev}) => {
            return(
              <SwiperSlide key={id} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt={alt}/>
                </div>
                <h5 className='client__name'>{avatarName}</h5>
                  <small className='client__review'>
                    {rewiev}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials