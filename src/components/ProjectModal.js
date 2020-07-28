import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalCarousel from './ModalCarousel'

import data from '../assets/js/portfolio'


export default function ProjectMod(props) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  const modalData = data[props.index].modal;

  return (
    <div style={{ width: '80vw' }}>
      <Button color="danger" onClick={toggle}>Read More</Button>
      <Modal isOpen={modal} toggle={toggle} style={{ width: '80vw' }}>
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
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

/*

          <p>
            <strong>Technology Used:</strong><br />
            - HTML5/CSS3        - Express JS <br />
            - React JS            - Mongo Db <br />
            - Node JS
          </p>

          <p>
            <strong>Admin Features:</strong><br />
            - Add / remove products<br />
            - Update product details (price / quantity / description / images)<br />
            - Notified by the number of visitors every month<br />
            - Updating admin account
          </p>

          <p>
            <strong>User Features:</strong><br />
            - Browsing products by categories<br />
            - Browsing products reviews<br />
            - Adding product review after receiving an order<br />
            - Creating/Updating his amazona account<br />
            - Payinig via Paypal<br />
          </p>

*/