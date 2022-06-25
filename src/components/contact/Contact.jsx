import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5npz5gg', 'template_nlod0su', form.current, '2Gvh4iHSW29SiKScU')
     e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mohamedelmouki0@gmail</h5>
            <a href="mailto:mohamedelmouki0@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>mohamed el mouki</h5>
            <a href="https://m.me/mohamedelmouki0" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+212632007841</h5>
            <a href="https://api.whatsapp.com/send?phone=00212632007841" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email' required  />
          <textarea name="message" id="" rows="7" placeholder='Your message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact