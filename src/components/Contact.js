import React, { useState } from 'react'
import { Spinner } from 'reactstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import emailjs from 'emailjs-com';
import qrCode from '../assets/qrcode/whatsapp.svg'

export default function Contact() {

  const MySwal = withReactContent(Swal);
  const [loading, setloading] = useState(false);

  const showQRC = () => {
    document.querySelector('.whatsQRC').classList.toggle('active')
  }

  const onSubmit = e => {
    e.preventDefault();

    let data = {};

    Array.from(e.target.elements).forEach(element => {
      data = {
        ...data,
        [element.name]: element.value
      }
    })

    let isValid = handleValidation(data);

    // if not valid
    if (!isValid.formIsValid) {
      if (isValid.errors.from_name) document.querySelector('#name').nextElementSibling.innerHTML = isValid.errors.from_name;
      if (isValid.errors.from_email) document.querySelector('#email').nextElementSibling.innerHTML = isValid.errors.from_email;
      if (isValid.errors.subject) document.querySelector('#subject').nextElementSibling.innerHTML = isValid.errors.subject;
      if (isValid.errors.html_message) document.querySelector('#message').nextElementSibling.innerHTML = isValid.errors.html_message;
      return null;
    }

    if (!isValid.errors.from_name) document.querySelector('#name').nextElementSibling.innerHTML = '';
    if (!isValid.errors.from_email) document.querySelector('#email').nextElementSibling.innerHTML = '';
    if (!isValid.errors.subject) document.querySelector('#subject').nextElementSibling.innerHTML = '';
    if (!isValid.errors.html_message) document.querySelector('#message').nextElementSibling.innerHTML = '';

    sendEmail(e.target);
  }


  const handleValidation = (data) => {
    let errors = {};
    let formIsValid = true;

    //Name
    if (!data["from_name"]) {
      formIsValid = false;
      errors["from_name"] = "Please enter your name";
    }

    if (typeof data["from_name"] !== "undefined") {
      if (!data["from_name"].match(/^[a-zA-Z\s]+$/)) {   //^[a-z] means start with letter , \s accept spaces
        formIsValid = false;
        errors["from_name"] = "Name should be only letters";
      }
    }

    //Email
    if (!data["from_email"]) {
      formIsValid = false;
      errors["from_email"] = "Please enter your email";
    }

    if (typeof data["from_email"] !== "undefined") {
      let lastAtPos = data["from_email"].lastIndexOf('@');
      let lastDotPos = data["from_email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && data["from_email"].indexOf('@@') === -1 && lastDotPos > 2 && (data["from_email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["from_email"] = "Please enter a valid e-mail";
      }
    }

    //Subject
    if (!data["subject"]) {
      formIsValid = false;
      errors["subject"] = "Please enter your email subject";
    }

    //Message
    if (!data["html_message"]) {
      formIsValid = false;
      errors["html_message"] = "Please enter your message";
    }


    return { formIsValid, errors };
  }



  const sendEmail = (data) => {
    setloading(true);
    emailjs.sendForm('gmail', 'template_cHHmNcRU', data, 'user_TcY0sSeuVt34ZyuPup87R')
      .then((result) => {
        setloading(false);

        MySwal.fire({
          icon: 'success',
          title: 'Got Your Message!',
          text: 'I will get to you soon, Thanks!',
          footer: '<h4> Towards the goal.. </h4>'
        })
      }, (error) => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: error.text
        })
      });
  }

  return (
    <section className="page-section contacts" id="contact" name="contact">
      <div className="container contactContainer">
        <div className="text-center pt-5">
          <h3 className="section-subheading text-muted mt-3">If we build it, they will come..</h3>
          <h1 className="section-heading text-uppercase mb-5" style={{ color: '#fff', fontWeight: 'bold' }}>Contact Me</h1>
        </div>
        <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={onSubmit}>
          <div className="row align-items-stretch mb-2">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" id="name" name="from_name" type="text" placeholder="Your Name" style={{ fontSize: '1.2rem', padding: '1.5rem' }} />
                <p className="help-block text-danger mb-2"></p>
              </div>
              <div className="form-group">
                <input className="form-control" id="email" name="from_email" type="email" placeholder="Your Email" style={{ fontSize: '1.2rem', padding: '1.5rem' }} />
                <p className="help-block text-danger mb-2"></p>
              </div>
              <div className="form-group mb-md-0">
                <input className="form-control" id="subject" name="subject" type="text" placeholder="Your Subject" style={{ fontSize: '1.2rem', padding: '1.5rem' }} />
                <p className="help-block text-danger mb-2"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea className="form-control" id="message" name="html_message" placeholder="Your Message" rows="6" style={{ fontSize: '1.2rem' }} ></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ position: 'relative', overflow: 'hidden' }}>
            <div>
              <Spinner color="warning" className="mb-3" style={loading ? { visibility: 'visible' } : { visibility: 'hidden' }} />
            </div>

            <button className="btn text-uppercase mb-3 px-5 py-3" id="sendMessageButton" title="send to my gmail" type="submit" style={{ backgroundColor: '#fed136', color: '#fff', fontSize: '1.2rem' }} >Send Message</button>

            <strong className="orSpan" style={{ fontSize: '2rem', color: '#fff' }}> OR </strong>

            <span className="qrSpan">
              <a alt="Whatsapp Me" className="btn btn-success btn-social mb-1 px-3 py-2" href="https://wa.me/201115467756" target="_blank" rel="noopener noreferrer" title="Whatsapp Me">
                <i className="fab fa-whatsapp fa-3x" ></i>
              </a>
              <br />
              <span className="scanQR " onClick={showQRC}>Scan QR-Code</span>
            </span>

            <span className="whatsQRC text-right">
              <img src={qrCode} width="100" height="100" alt="whats app QR code"></img>
            </span>

          </div>
        </form>
      </div>
    </section >
  )
}
