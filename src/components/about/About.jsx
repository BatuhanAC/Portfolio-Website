import React from 'react'
import './About.css'
import ME from "../../assets/me-about.png"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: {
    },
    visible: {
    },
  }

  const hVariants = {
    hidden: {
      opacity: 0
    },
    view: {
      opacity:1,
    },
  }

  const staggerVariants= {
    hidden: {scale:0},
    view: {
      scale:1,
      transition: {
        staggerChildren: 0.5
      }
    }, 
  }

  const childVariant= {
    hidden: {
      scale:0
    },
    view: {
      scale:1, 
      transition: {
        type: "spring", stiffness: 87
      },
    },
  }

  return (
    <motion.section id='about'
    variants={containerVariants}
    animate="visible"
    initial="hidden"
    >
      <motion.h5
        variants={hVariants}
        whileInView ="view"
        transition={{duration: 1.5}}
        viewport= {{once: true}}
      >Tecrübelerim</motion.h5>
      <motion.h2
        variants={hVariants}
        whileInView = "view"
        transition={{duration: 1.5, delay: 0.5}}
        viewport={{once: true}}
      >Hakkında</motion.h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} />
          </div>
        </div>

        <div className='about__content'>
          <motion.div className='about__cards'
            variants={staggerVariants}
            initial="hidden"
            whileInView="view"
            transition="transition"
          >
            <motion.div className='about__card'
              variants={childVariant}
              whileHover= {{
                scale: [1, 1.1, 1], 
                cursor:"default", 
                transition: {duration: 1, repeat: Infinity, repeatDelay:0.1} 
              }}
            >
              <FaAward className='about__icon'/>
              <motion.h5>Tecrübe</motion.h5>
              <motion.small>Henüz yola yeni çıktım.</motion.small>
            </motion.div>
            <motion.div className='about__card'
              variants={childVariant}
              whileHover= {{
                scale: [1, 1.1, 1], 
                cursor:"default", 
                transition: {duration: 1, repeat: Infinity, repeatDelay:0.1} 
              }}
            >
              <FiUsers className='about__icon'/>
              <motion.h5>Müşterilerim</motion.h5>
              <motion.small>Şimdilik yok.</motion.small>
            </motion.div>
            <motion.div className='about__card'
              variants={childVariant}
              whileHover= {{
                scale: [1, 1.1, 1], 
                cursor:"default", 
                transition: {duration: 1, repeat: Infinity, repeatDelay:0.1} 
              }}
            >
              <VscFolderLibrary className='about__icon'/>
              <motion.h5>Projelerim</motion.h5>
              <motion.small>3 adet bitmiş projem bulunmakta.</motion.small>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{translateX:-50, opacity:0}}
            whileInView={{translateX:0, opacity:1, transition: {duration:1.5}}}
            viewport= {{once:true}}
          >
          Henüz sektöre yeni giren bir kişi olarak kendimi eğitmek amacıyla başlayıp bitirdiğim üç adet projem bulunmakta ve bir de 
          bu üç proje dışında frontend geliştiriciliğinin haricinde daha öncesinde merak edip de giriştiğim bazı oyun geliştirme
          deneyimlerine de sahibim.  
          </motion.p>

          <motion.a href="#contact" className='btn btn-primary'
            initial={{opacity:0}}
            whileInView= {{opacity:1}}
            viewport= {{once: true}}
          >Bana Ulaşın!</motion.a>
        </div>
      </div>
    </motion.section>
  )
}

export default About