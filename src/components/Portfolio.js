import React from 'react'
import ProjectModal from './ProjectModal'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import allData from '../assets/js/portfolio'


export default function Portfolio() {

  return (
    <section className="page-section py-5" id="portfolio" name="portfolio">
      <div className="container">

        <div className="text-center">
          <h1 className="section-heading text-uppercase " >Portfolio</h1>
        </div>

        <div className="d-flex flex-wrap justify-content-between" >
          {
            allData.map((data, index) => {
              return (

                <Card className="flex-{grow|shrink}-1" key={index}>

                  <a href={data.link} title="see live preview" target="_blank" rel="noopener noreferrer">
                    <CardImg top src={data.image.src} alt={data.image.alt} />
                  </a>

                  <CardBody>

                    <a href={data.link} title="see live preview" target="_blank" rel="noopener noreferrer">
                      <CardTitle>{data.title}</CardTitle>
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
