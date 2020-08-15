import React, { useContext } from 'react'
import dataAr from '../assets/js/servicesAr';
import dataEn from '../assets/js/servicesEn';
import { LangContext } from './context/LangContext';

export default function Services() {

  const Lang = useContext(LangContext);
  let allData;
  if (Lang.isEnglish) {
    allData = dataEn;
  }
  else {
    allData = dataAr;
  }

  return (
    <section className="page-section py-5" id="services" name="services">
      <div className="container">

        <div className="text-center">
          <h2 className="section-heading text-uppercase mb-5 " > {allData.sectionName} </h2>
        </div>

        <div className="row text-center">
          {
            allData.services.map((data, index) => {
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