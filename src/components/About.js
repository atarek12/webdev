import React, { useState } from 'react'
import myPhoto from '../assets/images/me/me.jpg'
import { Collapse, ListGroup, ListGroupItem } from 'reactstrap';

import data from '../assets/js/about'

export default function About() {

  const renderSkills = data.skills.map((mainskill, index) => {
    return (
      <SkillItem title={mainskill.title} index={index} key={index} />
    )
  })


  return (
    <section className="page-section py-5" id="about" name="about">
      <div className="container">

        <div className="text-center">
          <h1 className="section-heading text-uppercase " >About</h1>
        </div>

        <div className="row">

          <div className="col-md-6">

            <div className="my-photo text-center row" >
              <img className="col" src={myPhoto} alt="My profile" width="50%" height="auto" />
              <div className="col cenerized" > <a className="btn btn-danger" role="button" href="https://drive.google.com/file/d/1KzPQhA-v6PWC5POCD6aqyBLD1O15oR96/view?usp=sharing" title="open in new tab" target="_blank" rel="noopener noreferrer"> MY RESUME </a> </div>
            </div>

            <div className="summary">
              <p>
                My name is<strong> Ahmed Tarek</strong>, I am passionate Full Stack Developer with the focus on MERN-Stack, I have multiple years of experience in the field of software development (since 2017), I have built many applications in both server-side and client-side.
                </p>
              <p>
                I also come from three different career backgrounds: Web Development, Embedded Systems, and Machine Learning. Embedded Systems was my first speciality at university and I did several projects based on AVR architecture and Arduino, then went to Machine Learning Specialization as it is part of my Master degree study at Cairo University.
                </p>
            </div>

          </div>

          <div className="col-md-6">

            <div className="text-left">
              <h2>- SKILLS</h2>
            </div>

            {renderSkills}

          </div>

        </div>
      </div>
    </section >
  )
}

// -------------------- Skill Item Component -----------------------

function SkillItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    setIsOpen(!isOpen);
    e.target.classList.toggle('active');
  }

  return (
    <div >

      <button className="skillBtn btn btn-secondary" id="toggler" onClick={toggle}>
        {props.title}
      </button>

      <Collapse isOpen={isOpen} toggler="#toggler">
        <ListGroup>
          {
            data.skills[props.index].skills.map((skill, index2) => {
              return (
                <ListGroupItem key={index2}>{skill}</ListGroupItem>
              )
            })
          }
        </ListGroup>
      </Collapse >

    </div>
  )
}


