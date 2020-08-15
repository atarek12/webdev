import React, { useContext } from 'react'
import logo from '../assets/images/logo/h_logo.png'

import dataAr from '../assets/js/navbarAr';
import dataEn from '../assets/js/navbarEn';
import { LangContext } from './context/LangContext';


export default function NavBar() {

  const Lang = useContext(LangContext);
  let data;
  let textAlign;
  if (Lang.isEnglish) {
    data = dataEn;
    textAlign = 'text-right';
  }
  else {
    data = dataAr;
    textAlign = 'text-left';
  }

  const toggle = () => {
    document.querySelector('.NavLinks ul').classList.toggle('active');
  }

  const closeNav = () => {
    document.querySelector('.NavLinks ul').classList.remove('active');
  }

  return (
    <header style={{ background: '#212529', position: 'sticky', top: '0', zIndex: '5' }}>
      <div className="container">
        <div className="NavBar row">

          <div className="col col-3">
            <a href="#/" className="sectionLink home" >
              <img src={logo} alt="Web Dev logo" title="Go Up" />
            </a>
          </div>

          <div className={`col btnDiv ${textAlign}`}>
            <button className="toggleBtn" onClick={toggle}  >&#9776;</button>
          </div>

          <div className="NavLinks col-md-9">

            <ul>
              {
                data.map((section, index) => {
                  return (
                    <li key={index} onClick={closeNav} >
                      <a href={`#${section.link}`} className={"sectionLink " + section.link} title={section.name} >{section.name}</a>
                    </li>
                  )
                })
              }

            </ul>

          </div>
        </div>
      </div>
    </header>
  )
};

/**
               <li onClick={closeNav} >
                <a href="#portfolio" className="sectionLink portfolio" title="My Portfolio"  >Portfolio</a>
              </li>
              <li onClick={closeNav} >
                <a href="#about" className="sectionLink about" title="More About Me" >About</a>
              </li>
              <li onClick={closeNav} >
                <a href="#contact" className="sectionLink contact" title="Contact Me" >Contact</a>
              </li>
 */