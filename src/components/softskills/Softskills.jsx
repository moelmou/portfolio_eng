import React from 'react'
import './softskills.css'
import {BiCheck} from 'react-icons/bi'

const Softskills = () => {
  return (
    <section id='softskills'>
       <h5>What Skills Do I Have</h5>
      <h2>My Soft Skills</h2>
      <div className="container softskills__container">
        <article className="softskills">
          <div className="softskills__head">
            <h3>Methodical Skills</h3>
          </div>
          <ul className="softskills__list">
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Team player</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Agility(Scrum)</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Analytical skills</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Presentation skills</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Stress resistance</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Problem-solving skills</p>
            </li>
          </ul>
        </article>

        <article className="softskills">
          <div className="softskills__head">
            <h3>Social Life</h3>
          </div>
          <ul className="softskills__list">
            <li>
            <div><BiCheck className='softskills__list-icon'/></div>
              <p>Developement and Research manager at the Engineering Students' Association of ENSAKh</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Member of ENSACTUS ENSA Khouribga Club</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>TED Translator volunteer</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Ex-Member of The Great Debators Club ENSAJ</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Marketing Managaer in a Social Entrepreneurial Project</p>
            </li>
          </ul>
        </article>

        <article className="softskills">
          <div className="softskills__head">
            <h3>Personal Skills</h3>
          </div>
          <ul className="softskills__list">
          <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Resilience</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Responsibility</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Motivation</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Self-discipline</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Self-reflection</p>
            </li>
            <li>
               <div><BiCheck className='softskills__list-icon'/></div>
              <p>Confidence</p>
            </li>
            

          </ul>
        </article>
      </div>

    </section>
  )
}

export default Softskills