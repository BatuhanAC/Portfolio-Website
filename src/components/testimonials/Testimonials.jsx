import React from 'react'
import './Testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';

const data = [
  {
    id: 1,
    avatarName: 'Batuhan Acar',
    avatar: AVTR1,
    alt: 'Avatar One',
    rewiev: 'Umarım yakın zamanda müşterilerim olacak. :)'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <motion.h5
        initial= {{opacity:0}}
        whileInView= {{opacity:1}}
        transition= {{duration:1.5}}
        viewport= {{once:true}}
      >Müşterilerden</motion.h5>
      <motion.h2
        initial= {{opacity:0}}
        whileInView= {{opacity:1}}
        transition= {{duration:1.5, delay: 0.5}}
        viewport= {{once:true}}
      >Geri Dönüşler</motion.h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, avatarName, avatar, alt, rewiev}) => {
            return(
              <SwiperSlide key={id} className='testimonial'>
                <motion.div className='client__avatar'
                  initial= {{opacity:0}}
                  whileInView= {{opacity:1}}
                  transition= {{duration:1.5}}
                  viewport= {{once:true}}
                >
                  <img src={avatar} alt={alt}/>
                </motion.div>
                <motion.h5 className='client__name'
                  initial= {{opacity:0}}
                  whileInView= {{opacity:1}}
                  transition= {{duration:1.5}}
                  viewport= {{once:true}}
                >{avatarName}</motion.h5>
                  <motion.small className='client__review'
                    initial= {{opacity:0}}
                    whileInView= {{opacity:1}}
                    transition= {{duration:1.5}}
                    viewport= {{once:true}}
                  >
                    {rewiev}
                  </motion.small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials