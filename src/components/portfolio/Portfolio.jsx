import React from 'react'
import './Portfolio.css'
import Portfolyo from '../../assets/Portfolyo.gif'
import Gunluk from '../../assets/Gunluk.gif'
import PersonalQR from '../../assets/PersonalQR.png'
import InfiniteBouncer from '../../assets/Infinite.jpg'
import Hat from '../../assets/Hat.gif'
import { motion } from 'framer-motion'

const data = [
  {
    id:1,
    image: Portfolyo,
    title:'Portfolyo Sitesi',
    github: 'https://github.com/BatuhanAC/Portfolio-Website',
    demo: 'https://baduh.tk'
  },
  {
    id:2,
    image: Gunluk,
    title:'Günlük Tutma Sitesi',
    github: 'https://github.com/BatuhanAC/Diary-Website-To-Learn-Extra',
    demo: null
  },
  {
    id:3,
    image: PersonalQR,
    title:'Kişisel QR Uygulaması',
    github: 'https://github.com/ziya-karagoz/Personal_QR',
    demo: null
  },
  {
    id:4,
    image: InfiniteBouncer,
    title:'InfiniteBouncer İsimli Mobil Oyun',
    github: 'https://github.com/ziya-karagoz/InfiniteBouncerGithub',
    demo: 'https://play.google.com/store/apps/details?id=com.AftermathGames.InfiniteBouncer'
  },
  {
    id:5,
    image: Hat,
    title:'GoneHat İsimli Mobil Oyun Denemesi',
    github: 'https://github.com/ziya-karagoz/GoneHatGithub',
    demo: null
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <motion.h5
        initial= {{opacity:0}}
        whileInView= {{opacity:1}}
        transition= {{duration:1.5}}
        viewport= {{once:true}}
      >Son Çalışmalarımın Bulunduğu</motion.h5>
      <motion.h2
        initial= {{opacity:0}}
        whileInView= {{opacity:1}}
        transition= {{duration:1.5, delay: 0.5}}
        viewport= {{once:true}}
      >Portfolyom</motion.h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <motion.article key={id} className='portfolio__item'
                initial= {{translateX:-50, opacity: 0}}
                whileInView= {{translateX: 0, opacity: 1}}
                transition= {{duration:1, delay: id*0.2}}
                viewport= {{once:true}}
              >
                <div className='portfolio__item-image'>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  { demo &&
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  }
                </div>
              </motion.article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio