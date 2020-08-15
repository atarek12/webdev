import React, { useState, useCallback } from 'react';

import './App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact';
import NavBar from './components/NavBar';

import { LangContext } from './components/context/LangContext'
import onScrolling from './assets/js/scroll'
import Footer from './components/Footer';
import Cookie from 'js-cookie'

export default function App() {

  let isEnglishInitialState = true;
  let dirInitialState = 'ltr';
  let langInitialState = 'en';
  const langCookie = Cookie.getJSON("lang") || '';
  if (langCookie === 'ar') {
    isEnglishInitialState = false;
    dirInitialState = 'rtl';
    langInitialState = 'ar';
  }

  const [isEnglish, setIsEnglish] = useState(isEnglishInitialState);
  const [dir, setDir] = useState(dirInitialState);
  const [lang, setLang] = useState(langInitialState);

  const setEnglish = useCallback(() => {
    setIsEnglish(true);
    Cookie.set("lang", "en");
    setDir('ltr');
    setLang('en');
  }, []);

  const setArabic = useCallback(() => {
    setIsEnglish(false);
    Cookie.set("lang", "ar");
    setDir('rtl');
    setLang('ar');
  }, []);

  onScrolling();

  return (
    <LangContext.Provider value={{ isEnglish: isEnglish, setEnglish: setEnglish, setArabic: setArabic }} >
      <div lang={lang} dir={dir} >
        <Home />
        <NavBar />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

