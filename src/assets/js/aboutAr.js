import React from 'react';

const about = {
  sectionName: 'نبذة شخصية',
  summary: <React.Fragment>
    <p>
      انا اسمي احمد طارق، مهندس برمجيات متخصص في تطوير المواقع الالكترونية، تخرجت من كلية الهندسة في عام 2017، ومنذ ذلك الحين عملت بعدة مجالات اخرى مثل الانظمة المدمجة والذكاء الاصطناعي
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

export default about