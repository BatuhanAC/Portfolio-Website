import React from 'react'
import './Contact.css'
import {FaWhatsapp} from 'react-icons/fa'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vwyiaib', 'template_87abae8', form.current, '28VWOf7242fQfXUDn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__links'>
          <article className='contact__link'>
            <AiOutlineMail className='contact__icon'/>
            <h4>Email</h4>
            <h5>batuhan1.acar@gmail.com</h5>
            <a href='mailto:batuhan1.acar@gmail.com' className='contact__send'>Send a message</a>
          </article>
          <article className='contact__link'>
            <RiMessengerLine className='contact__icon'/>
            <h4>Messenger</h4>
            <h5>baduhservices</h5>
            <a href='https://m.me/batuhan.acar.505960' className='contact__send'>Send a message</a>
          </article>
          <article className='contact__link'>
            <FaWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            <h5>+90507-173-5159</h5>
            <a href='https://api.whatsapp.com/send?phone=905071735159' className='contact__send'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact