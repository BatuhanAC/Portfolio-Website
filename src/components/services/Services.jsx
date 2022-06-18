import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section id='services'>
      <motion.h5
        initial= {{opacity:0}}
        whileInView= {{opacity:1}}
        transition= {{duration:1.5}}
        viewport= {{once:true}}
      >Neleri vaad ediyorum?</motion.h5>
      <motion.h2
        initial= {{opacity:0}}
        whileInView= {{opacity:1}}
        transition= {{duration:1.5, delay:0.5}}
        viewport= {{once:true}}
      >Servisler</motion.h2>
      
      <motion.div className='container services__container'
        initial= {{rotateX:90, opacity:0}}
        whileInView= {{rotateX:0, opacity:1}}
        transition= {{duration:1}}
        viewport= {{once:true}}
      >
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Dizaynı</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Her ekran boyutuna uygun bileşenler</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>İsteğe bağlı, çeşitli animasyonlar </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basit ve anlaşılır, kullanıcı dostu dizayn</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Servisleri</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hazır email şablonlarıyla iletişim</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gerçek kullanıcı testleri</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Site içi admin paneli</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Veritabanı ve sunucu ayarlamaları</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reklam hizmetleri</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>İçerik Servisleri</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontent yazılımcılığı üzerine içerik üretimi</p>
            </li>
          </ul>
        </article>
      </motion.div>
    </section>
  )
}

export default Services