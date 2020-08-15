import React, { useContext } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap';
import { LangContext } from './context/LangContext';

import dataAr from '../assets/js/homeAr';
import dataEn from '../assets/js/homeEn';

export default function Home() {
  const Lang = useContext(LangContext);

  const toggleLang = () => {
    if (Lang.isEnglish) Lang.setArabic();
    else Lang.setEnglish();
  }

  let data;
  if (Lang.isEnglish) data = dataEn;
  else data = dataAr;

  return (
    <section id="/" className="Home cenerized" name="home">
      <button className="Lang" onClick={toggleLang} > {Lang.isEnglish ? 'العربية' : 'English'} </button>

      <img className="backgroundImage " src={data.backgroundURL} alt="Background" />

      <Jumbotron fluid style={{ background: 'none' }} >
        <Container fluid className="container cenerized ">
          <h1 className="homeTitle"> {data.title} </h1>
          <h3 className=" slogan  "> {data.slogan} </h3>
          <p className="lead" >
            <a href='#services' title="My Services" >
              <Button color="warning" style={{ color: '#444' }} > {data.button} </Button>
            </a>
          </p>
        </Container>
      </Jumbotron>

    </section>
  )
}

