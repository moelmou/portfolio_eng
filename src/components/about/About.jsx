import React from 'react'
import './about.css'
import ME from '../../assets/ME.png'
import {FiAward} from 'react-icons/fi'



const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="My image" />
        </div>
      </div>
      <div clas className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FiAward className='about__icon'/>
            <h5>Degree</h5>
            <small>5th year ENSA Khouribga</small>
          </article> 
          <article className="about__card">
            <FiAward className='about__icon'/>
            <h5>Graduate</h5>
            <small>ACCESS Micro scholarship</small>
          </article> 
          <article className="about__card">
            <FiAward className='about__icon'/>
            <h5>Winner</h5>
            <small>ECOTHON Challenge 2022</small>
          </article>
        </div>
        <p>
        I am currently a Salesforce Consultant in <a href='https://www.deloittedigital.com/us/en.html'>Deloitte Extended Services</a> and a software engineering student at the National School of Applied Sciences in Khouribga, Morocco.
        <br />
            I believe I have the necessary skills that allow me to be productive while working in a team.<br/>
            And in addition to my collaborative spirit, I give enough importance to self-learning in my journeys so as to build a well stuctured career which is based on a fairly rigid base.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>



    </section>
  )
}

export default about
