import React from 'react';

const portfolio = {
  sectionName: 'portfolio',
  portfolio: [
    {
      link: 'https://amazonatemplate.herokuapp.com/',
      image: {
        src: require('../images/portfolio/amazona/0.PNG'),
        alt: 'amazona website'
      },
      title: 'amazona website',
      subtitle: 'eCommerce wep application',
      body: 'A fully responsive eCommerce website inspired by amazon.com',
      modal: {
        title: 'amazona website',
        features: [
          <p>
            <strong>Technology Used:</strong><br />
              - HTML5/CSS3        - Express JS <br />
              - React JS            - Mongo Db <br />
              - Node JS
        </p>,

          <p>
            <strong>Admin Features:</strong><br />
            - Add / remove products<br />
            - Update product details (price / quantity / description / images)<br />
            - Notified by the number of visitors every month<br />
            - Updating admin account
        </p>,

          <p>
            <strong>User Features:</strong><br />
          - Browsing products by categories<br />
          - Browsing products reviews<br />
          - Adding product review after receiving an order<br />
          - Creating/Updating his amazona account<br />
          - Payinig via Paypal<br />
          </p>
        ]
      },
      carousel: [
        {
          src: require('../images/portfolio/amazona/1.PNG'),
          altText: 'Login Page',
          caption: ''
        },
        {
          src: require('../images/portfolio/amazona/2.PNG'),
          altText: 'Home Page',
          caption: ''
        },
        {
          src: require('../images/portfolio/amazona/3.PNG'),
          altText: 'Shopping Cart',
          caption: ''
        },
        {
          src: require('../images/portfolio/amazona/4.PNG'),
          altText: 'Checkout',
          caption: ''
        }
      ]
    },



    {
      link: 'https://atarek12.github.io/React_Template/',
      image: {
        src: require('../images/portfolio/landingpage/0.PNG'),
        alt: 'landing page'
      },
      title: 'landing page',
      subtitle: 'Landing Page Template',
      body: 'A fully responsive landing page of a company',
      modal: {
        title: 'Landing Page',
        features: [
          <p>
            <strong>Technology Used:</strong><br />
              - HTML5/CSS3 <br />
              - React JS <br />
          </p>,

          <p>
            <strong>Features:</strong><br />
            - Fully Responsive<br />
            - Modern Design<br />
            - Reusable Compoents<br />
          </p>,
        ]
      },
      carousel: [
        {
          src: require('../images/portfolio/landingpage/1.PNG'),
          altText: 'home secion',
          caption: ''
        },
        {
          src: require('../images/portfolio/landingpage/2.PNG'),
          altText: 'profile section',
          caption: ''
        },
        {
          src: require('../images/portfolio/landingpage/3.PNG'),
          altText: 'about section',
          caption: ''
        },
      ]
    },



    {
      link: 'https://atarek12.github.io/Quiz-App/',
      image: {
        src: require('../images/portfolio/quiz/0.PNG'),
        alt: 'Quiz App'
      },
      title: 'Quiz App',
      subtitle: 'Online Quiz Application',
      body: 'An online quiz application which became an essntial part in the elearning era',
      modal: {
        title: 'Quiz App',
        features: [
          <p>
            <strong>Technology Used:</strong><br />
              - HTML5 <br />
              - CSS 3 <br />
              - Vanilla Javascript <br />
          </p>,

          <p>
            <strong>Features:</strong><br />
            - Shuffled Questions<br />
            - Different Quiz Models<br />
            - Countdown Timer<br />
            - Quick Results<br />
          </p>,
        ]
      },
      carousel: [
        {
          src: require('../images/portfolio/quiz/1.PNG'),
          altText: 'quiz app',
          caption: ''
        },
      ]
    },
	
	
	
	
	{
      link: 'https://insta-places-template.web.app/',
      image: {
        src: require('../images/portfolio/instaplaces/0.PNG'),
        alt: 'Insta Places'
      },
      title: 'Insta Places',
      subtitle: 'Web app inspired by Instagram',
      body: 'Web app where you can share memories and explore wonderfull places',
      modal: {
        title: 'Insta Places',
        features: [
          <p>
            <strong>Technology Used:</strong><br />
              - HTML5/CSS3        - Express JS <br />
              - React JS            - Mongo Db <br />
              - Node JS
        </p>,

          <p>
            <strong>User Features:</strong><br />
          - Browsing all users shared places<br />
          - Sign up for a new instaplaces account<br />
          - Adding a new place to his profile<br />
          - Accessing location of users places on google maps<br />
          - stay logged in whenever he visit website<br />
          </p>
        ]
      },
      carousel: [
        {
          src: require('../images/portfolio/instaplaces/1.PNG'),
          altText: 'sign up page',
          caption: ''
        },
        {
          src: require('../images/portfolio/instaplaces/2.PNG'),
          altText: 'user places',
          caption: ''
        },
        {
          src: require('../images/portfolio/instaplaces/3.PNG'),
          altText: 'google maps',
          caption: ''
        },
      ]
    },

  ]
}
export default portfolio;