import React, { useContext } from 'react'
import ProjectModal from './ProjectModal'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import dataAr from '../assets/js/portfolioAr';
import dataEn from '../assets/js/portfolioEn';
import { LangContext } from './context/LangContext';


export default function Portfolio() {

  const Lang = useContext(LangContext);
  let textAlign;
  let allData;
  if (Lang.isEnglish) {
    textAlign = 'left';
    allData = dataEn;
  }
  else {
    textAlign = 'right';
    allData = dataAr;
  }

  return (
    <section className="page-section py-5" id="portfolio" name="portfolio">
      <div className="container">

        <div className="text-center">
          <h2 className="section-heading text-uppercase my-5 " > {allData.sectionName} </h2>
        </div>

        <div className="d-flex flex-wrap justify-content-between" >
          {
            allData.portfolio.map((data, index) => {
              return (

                <Card className="flex-{grow|shrink}-1" key={index}>

                  <a href={data.link} title="see live preview" target="_blank" rel="noopener noreferrer">
                    <CardImg top src={data.image.src} alt={data.image.alt} />
                  </a>

                  <CardBody style={{ textAlign: textAlign }}>

                    <a href={data.link} title="see live preview" target="_blank" rel="noopener noreferrer">
                      <CardTitle>
                        {data.title + ' '}

                        <i className="fas fa-external-link-alt"> </i>
                      </CardTitle>
                    </a>

                    <CardSubtitle>{data.subtitle}</CardSubtitle>

                    <CardText>{data.body}</CardText>

                    <ProjectModal index={index} />

                  </CardBody>
                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
