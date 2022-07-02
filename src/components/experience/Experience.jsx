import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section id='experience'>
      <motion.h5
        initial= {{opacity:0}}
        whileInView= {{opacity:1}}
        transition= {{duration:1.5}}
        viewport= {{once:true}}
      >Ne gibi yeteneklerim var?</motion.h5>
      <motion.h2
        initial= {{opacity:0}}
        whileInView= {{opacity:1}}
        transition= {{duration:1.5, delay: 0.5}}
        viewport= {{once:true}}
      >Neler Biliyorum?</motion.h2>

      <div className="container experience__container">
        <motion.div className='experience__frontend'
          initial= {{translateX: -50, opacity: 0}}
          whileInView= {{translateX: 0, opacity: 1}}
          transition= {{duration:1}}
          viewport= {{once:true}}
        >
          <h3>Frontend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React & React-Native</h4>
                <small className='text-light'>Tecrübeli</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JS & JSX</h4>
                <small className='text-light'>Tecrübeli</small>
              </div>
            </article>
            <article className='experience__details'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Orta Seviye</small>
              </div>
            </article>
            <article className='experience__details'></article>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS & Tailwind-CSS</h4>
                <small className='text-light'>Tecrübeli</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Tecrübeli</small>
              </div>
            </article>
          </div>
        </motion.div>

        <motion.div className='experience__backend'
          initial= {{translateX: 50, opacity: 0}}
          whileInView= {{translateX: 0, opacity: 1}}
          transition= {{duration:1}}
          viewport= {{once:true}}
        >
        <h3>Backend</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Orta Seviye</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>FireBase</h4>
                  <small className='text-light'>Orta Seviye</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Orta Seviye</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C & C# & C++</h4>
                  <small className='text-light'>Düşük Seviye</small>
                </div>
              </article>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience