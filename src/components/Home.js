import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap';


export default function Home() {
  return (
    <section id="/" className="Home cenerized" name="home">
      <div className="backgroundImage " ></div>
      <Jumbotron fluid style={{ background: 'none' }} >
        <Container fluid className="container cenerized ">
          <h1 className="homeTitle">FULL STACK DEVELOPER</h1>
          <h3 className=" slogan  ">Getting Your<span> MESSAGE</span> to the <span>WORLD…</span></h3>
          <p className="lead" >
            <a href='#services' title="My Services" >
              <Button color="warning" style={{ color: '#444' }} >Learn More</Button>
            </a>
          </p>
        </Container>
      </Jumbotron>
    </section>
  )
}

