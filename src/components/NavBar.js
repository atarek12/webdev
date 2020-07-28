import React from 'react'
import logo from '../assets/images/logo/h_logo.png'


export default function NavBar() {

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

          <div className="col btnDiv text-right">
            <button className="toggleBtn" onClick={toggle}  >&#9776;</button>
          </div>

          <div className="NavLinks col-md-9">

            <ul>
              <li onClick={closeNav} >
                <a href="#services" className="sectionLink services" title="My Services" >Services</a>
              </li>
              <li onClick={closeNav} >
                <a href="#portfolio" className="sectionLink portfolio" title="My Portfolio"  >Portfolio</a>
              </li>
              <li onClick={closeNav} >
                <a href="#about" className="sectionLink about" title="More About Me" >About</a>
              </li>
              <li onClick={closeNav} >
                <a href="#contact" className="sectionLink contact" title="Contact Me" >Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </header>
  )
}


/*

*/