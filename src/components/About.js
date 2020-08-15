import React, { useState, useEffect, useRef, useContext } from 'react'
import myPhoto from '../assets/images/me/me.jpg'
import { Collapse, ListGroup, ListGroupItem } from 'reactstrap';

import dataAr from '../assets/js/aboutAr'
import dataEn from '../assets/js/aboutEn'
import { LangContext } from './context/LangContext';

export default function About() {

  const Lang = useContext(LangContext);
  let data;
  let textAlign;
  if (Lang.isEnglish) {
    data = dataEn;
    textAlign = 'left';
  }
  else {
    data = dataAr;
    textAlign = 'right';
  }

  const renderSkills = data.skills.map((mainskill, index) => {
    return (
      <SkillItem title={mainskill.title} index={index} key={index} />
    )
  })


  return (
    <section className="page-section py-5" id="about" name="about">
      <div className="container">

        <div className="text-center">
          <h2 className="section-heading text-uppercase my-5 " > {data.sectionName} </h2>
        </div>

        <div className="row">

          <div className="col-md-6">

            <div className="text-center " >
              <div className=" my-photo" ><img src={myPhoto} alt="My profile" /></div>
            </div>

            <div className=" cenerized my-2" >
              <a className="btn btn-danger" role="button" href="https://drive.google.com/file/d/1KzPQhA-v6PWC5POCD6aqyBLD1O15oR96/view?usp=sharing" title="open in new tab" target="_blank" rel="noopener noreferrer">
                {Lang.isEnglish ? 'MY RESUME' : 'السيرة الذاتية'} {' '}
                <i className="fas fa-hand-point-right"></i>
              </a>
            </div>

            <div className="summary" style={{ textAlign: textAlign }}>
              {data.summary}
            </div>

          </div>

          <div className="col-md-6">

            <div style={{ textAlign: textAlign }}>
              <h3>{Lang.isEnglish ? '- SKILLS' : 'المهارات -'}</h3>
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

  const Lang = useContext(LangContext);
  let data;
  if (Lang.isEnglish) {
    data = dataEn;
  }
  else {
    data = dataAr;
  }

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    if (isOpen) btnRef.current.classList.add('active');
    else btnRef.current.classList.remove('active');
  }, [isOpen])

  const toggle = (e) => {
    setIsOpen(!isOpen);
  }

  return (
    <div >

      <div className="skillBtn btn btn-secondary" id="toggler" onClick={toggle} ref={btnRef}>
        <div className="row">
          <div className="col-10 text-left" >{props.title}</div>
          <div className="col-2 text-right" >
            {
              isOpen ? <i className="fas fa-arrow-up"></i> : <i className="fas fa-arrow-down"></i>
            }
          </div>
        </div>
      </div>

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


