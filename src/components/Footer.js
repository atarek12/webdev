import React from 'react'

export default function Footer() {
  return (
    <footer className="footer py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 text-center text-sm-left">Copyright © Ahmed Tarek</div>
          <div className="col-sm-6 text-center text-sm-right my-3 my-md-0">
            <a className="btn btn-dark btn-social mx-2" title="GitHub" href="https://github.com/atarek12" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" ></i></a>
            <a className="btn btn-dark btn-social mx-2" title="LinkedIn" href="https://www.linkedin.com/in/ahmed-tarek12/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-dark btn-social mx-2" title="Instagram" href="https://www.instagram.com/atarek12/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
