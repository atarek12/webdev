import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalCarousel from './ModalCarousel'

import dataAr from '../assets/js/portfolioAr';
import dataEn from '../assets/js/portfolioEn';
import { LangContext } from './context/LangContext';


export default function ProjectMod(props) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  const Lang = useContext(LangContext);
  let data;
  let textAlign;
  if (Lang.isEnglish) {
    data = dataEn;
    textAlign = 'left';
  }
  else {
    data = dataAr;
    textAlign = 'right';
  }

  const modalData = data.portfolio[props.index].modal;

  return (
    <React.Fragment >
      <Button color="danger" onClick={toggle}>{Lang.isEnglish ? 'Read More' : 'اقرأ المزيد'}</Button>
      <Modal isOpen={modal} toggle={toggle} style={{ width: '80vw', margin: 'auto', textAlign: textAlign }}>
        <ModalHeader toggle={toggle} close={closeBtn}>{modalData.title}</ModalHeader>
        <ModalBody>

          <ModalCarousel index={props.index} />

          {
            modalData.features.map((feature, index) => {
              return (
                <div key={index} >{feature}</div>
              )
            })
          }

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>{Lang.isEnglish ? 'Close' : 'إلغاء'}</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

