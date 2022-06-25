import React from 'react'
import './hardskills.css'
import {BsPatchCheckFill } from 'react-icons/bs'

const Hardskills = () => {
  return (
    <section id='hardskills'>
      <h5>What Skills Do I Have</h5>
      <h2>My Hard Skills</h2>
      <div className="container hardskills__container">
        <div className="hardskills__progLang">
          <h3>Programming Languages</h3>
          <div className="hardskills__content">
          <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>C</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>1C</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>Dart</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>JAVA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="hardskills__front">
        <h3>Front End</h3>
          <div className="hardskills__content">
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="hardskills__back">
        <h3>Back End</h3>
          <div className="hardskills__content">
          <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>JEE,JSE</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article> 
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>NodeJs</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="hardskills__FramLibr">
        <h3>Frameworks and Libraries</h3>
          <div className="hardskills__content">
          <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>JQuery</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="hardskills__db">
        <h3>DataBases</h3>
          <div className="hardskills__content">
          <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>ORACLE</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="hardskills__vrsnCntrl"> 
        <h3>Version Control</h3>
          <div className="hardskills__content">
          <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>Git</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='hardskills__details'>
              <BsPatchCheckFill className='hardskills__details-icon'/>
              <div>
                <h4>GitHub</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hardskills