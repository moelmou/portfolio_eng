import React from 'react'
import './activities.css'

import IMG1 from '../../assets/A.png'
import IMG2 from '../../assets/B.png'
import IMG3 from '../../assets/C.png'
import IMG4 from '../../assets/D.png'
import IMG10 from '../../assets/I.jpg'
import IMG5 from '../../assets/F.png'
import IMG6 from '../../assets/G.png'
import IMG7 from '../../assets/E.png'
import IMG8 from '../../assets/O.png'
import IMG9 from '../../assets/H.png'
import IMG11 from '../../assets/K.png'
import IMG12 from '../../assets/J.png'


const data=[
  {
    id:1,
    image:IMG1,
    title:'Language Recognition using C language and DFA theory',
    github:'https://github.com/moelmou/Regex/',
    LearnMore:'https://en.wikipedia.org/wiki/Deterministic_finite_automaton',
    name:'Github',
    alt:'A program to convert a REGEX to an AFD then tries to recognize a given word using this AFD'
},
{
  id:2,
  image:IMG2,
  title:'Library Management System using JAVAEE',
  github:'https://github.com/moelmou/Library_management/',
  LearnMore:'https://fr.wikipedia.org/wiki/Jakarta_EE',
  name:'Github',
  alt:'A web site I developed that manages books, students and loans using JAVAEE'
},
{
  id:3,
  image:IMG3,
  title:'Mobility Management Website using PHP',
  github:'https://github.com/moelmou/Mobility_project/',
  LearnMore:'https://fr.wikipedia.org/wiki/PHP',
  name:'Github',
  alt:'A web site I developed that manages oour school mobility oportunities for students using php,html and CSS'
},
{
  id:4,
  image:IMG4,
  title:'2-Graph Partitionning using JAVASE and Tabu-Search',
  github:'https://github.com/moelmou/Tabu_Search',
  LearnMore:'https://en.wikipedia.org/wiki/Tabu_search',
  name:'Github',
  alt:'Java program that partition a graph to two sets using TABU-SEARCH algorithm'
},
{
  id:10,
  image:IMG10,
  title:'Datty is a coffee alternative made out of date seeds',
  github:'https://www.linkedin.com/company/dattycoffee/?viewAsMember=true',
  LearnMore:'https://www.instagram.com/datty.coffee/',
  name:'LinkedIn',
  alt:'Co-associate in a small business called DattyCoffee since 2021, an alternative drink to coffee that is made out of date seeds'
},
{
  id:5,
  image:IMG5,
  title:'TEDxENSAKhouribga21 is a univeristy TED-like gathering',
  github:'https://www.ted.com/tedx/events/37570',
  LearnMore:' https://lamarocaine.info/238699.html',
  name:'Website',
  alt:'Lead the organizing team of TEDxENSAKhouribga 2021 in ENSA Khouribga'
},
{
  id:6,
  image:IMG6,
  title:'An initiative that tries to bring the community’s solutions for climate change into the global conversation',
  github:'https://www.ted.com/tedx/events/40515',
  LearnMore:'https://countdown.ted.com/',
  name:'Website',
  alt:'Lead the organizing team of COUNTDOWN20 by TEDxENSAKhouribga in collaboration with in TEDxENSAElJadida'
},
{
  id:7,
  image:IMG7,
  title:'An Annual event that brings software world,data sciences and computer sciences to ENSA Khouribga',
  github:'https://www.linkedin.com/company/open-source-days-ensakh/?viewAsMember=true',
  LearnMore:'https://www.youtube.com/watch?v=jgEOBdolUhE',
  name:'LinkedIn',
  alt:'Took part in the sponsorship and media management team of the 10th edition of OpenSourceDays10.0'
},
{
  id:8,
  image:IMG8,
  title:'Challenge for young students to solve most pressing issues through social entrepreneurship',
  github:'https://www.facebook.com/HultPrizeENSAK/',
  LearnMore:'https://www.facebook.com/HultPrizeENSAK/',
  name:'Facebook',
  alt:"Been an event manager in ENSA Khouribga's edition of HultPrize 2020 that's subject was Hunger and food challenges"
},
{
  id:9,
  image:IMG9,
  title:'TEDxENSAElJAdida 2019 is ENSA El Jadida TED-like event',
  github:'https://www.ted.com/tedx/events/32866',
  LearnMore:'https://www.ted.com/tedx/events/32866',
  name:'Website',
  alt:'Lead the organizing team of TEDxENSAElJadida 2019 in ENSA El Jadida'
},
{
  id:11,
  image:IMG11,
  title:'Pogrammers gathered for a 36H of time to collaborate on a project',
  github:'https://www.linkedin.com/posts/open-source-days-ensakh_opensourcedays10-hackathon-openhack-activity-6927596004074475520-0GL_?utm_source=linkedin_share&utm_medium=member_desktop_web',
  LearnMore:'https://www.khabarkhouribga.com/khouribga-la-10eme-edition-des-open-source-days-a-lensa/',
  name:'LinkedIn',
  alt:'Lead the organization of the OpenHack22, Hackathon competition hosted by OpenSourceDays10.0 in ENSAKhouribga on the 17th, 18th of May'
},
{
  id:12,
  image:IMG12,
  title:'ECOTHON Challenge Winner Given By Zayed Sustainabilty Prize',
  github:'https://www.linkedin.com/feed/update/urn:li:activity:6910142360454606848/',
  LearnMore:'https://www.zayedsustainabilityprize.com/ecothon',
  name:'LinkedIn',
  alt:'Won this challenge together with two colleagues from ENSAElJadida , Yassin Miski and Khadija abdeljabbar'
}
]

const Activities = () => {
  return (
    <section id='activities'>
      <h5>My Recent Activities</h5>
      <h2>Projects And Events</h2>

      <div className="container portfolio__container">

     {
      data.map(({id,image,title,github,LearnMore,name,alt})=>{
        return(
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} title={alt} />
          </div>
          <h3 >{title}</h3>
            <div className='portfolio__item-CTA'>       
            <a href={github} className='btn' target='_blank'>{name}</a>
            <a href={LearnMore} className='btn btn-primary' target='_blank'>Learn More</a>
            </div> 
        </article>
        )
      })
     }
        
      </div>

    </section>
  )
}

export default Activities