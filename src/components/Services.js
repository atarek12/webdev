import React from 'react'
import allData from '../assets/js/services'

export default function Services() {
  return (
    <section className="page-section py-5" id="services" name="services">
      <div className="container">

        <div className="text-center">
          <h1 className="section-heading text-uppercase " >Services</h1>
        </div>

        <div className="row text-center">
          {
            allData.map((data, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x" style={{ color: '#fed136' }}></i>
                    <i className={data.icon}></i>
                  </span>
                  <h4 className="my-3">{data.title}</h4>
                  <p className="text-muted"> {data.body} </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}