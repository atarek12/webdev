import React from 'react';

const about = {
  sectionName: 'about',
  summary: <React.Fragment>
    <p>
      My name is<strong> Ahmed Tarek</strong>, I am passionate Full Stack Developer with the focus on MERN-Stack. I have multiple years of experience in the field of software development (since 2017). I have built many applications in both server-side and client-side.
    </p>
    <p>
      I also come from two different career backgrounds: Embedded Systems and Machine Learning. Embedded Systems was my first speciality at university and I did several projects based on AVR architecture and Arduino, then went to Machine Learning Specialization as it is part of my Master degree study at Cairo University.
    </p>
  </React.Fragment>,
  skills: [
    {
      title: 'Web Markup Languages',
      skills: [
        'Javascript',
        'HTML 5',
        'CSS 3',
        'Bootstrap 4',
        'SASS',
        'JSX'
      ]
    },
    {
      title: 'Javascript Library: React JS',
      skills: [
        'React Redux',
        'React Router',
        'Class Based Component',
        'React Hooks',
        'HTTP/AJAX and Axios',
        'Styled Component'
      ]
    },
    {
      title: 'Server-side language: Node JS',
      skills: [
        'Express JS',
        'REST APIs',
        'Mongoose',
        'JWT Authentication',
        'Multer v3',
        'Socket.io'
      ]
    },
    {
      title: 'Databases',
      skills: [
        'No-SQL',
        'Mongo DB'
      ]
    }
  ]
}

export default about;