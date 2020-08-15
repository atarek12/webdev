import React from 'react';

const portfolio = {
  sectionName: 'معرض الاعمال',
  portfolio: [
    {
      link: 'https://amazonatemplate.herokuapp.com/',
      image: {
        src: require('../images/portfolio/amazona/0.PNG'),
        alt: 'amazona website'
      },
      title: 'amazona website',
      subtitle: 'متجر الكتروني',
      body: 'متجر الكتروني مصمم مثل موقع امازون الشهير',
      modal: {
        title: 'amazona website',
        features: [
          <p>
            <strong>:لغات البرمجة المستخدمة</strong><br />
              - HTML5/CSS3        - Express JS <br />
              - React JS            - Mongo Db <br />
              - Node JS
        </p>,

          <p>
            <strong>:مميزات لوحة التحكم</strong><br />
            اضافة وحذف المنتجات -<br />
            تعديل وصف المنتج: السعر / الكمية / الوصف / الصور -<br />
            الاطلاع على عدد الزوار الشهري -<br />
            تعديل الحساب الشخصي واضافة اخرين -
        </p>,

          <p>
            <strong>:مميزات العميل</strong><br />
          تصفح المنتجات حسب النوع -<br />
          قراءة تقييمات المنتجات -<br />
          اضافة تقييم للمنتج بعد اتمام عملية الشراء -<br />
          انشاء وتعديل حساب شخصي على الموقع -<br />
          الدفع الالكتروني من خلال باي بال -<br />
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
      subtitle: 'قالب صفحة هبوط',
      body: 'قالب صفحة هبوط لشركتك الخاصة متجاوب تماما مع جميع الاجهزة',
      modal: {
        title: 'Landing Page',
        features: [
          <p>
            <strong>:لغات البرمجة المستخدمة</strong><br />
              - HTML5/CSS3 <br />
              - React JS <br />
          </p>,

          <p>
            <strong>:المميزات</strong><br />
            متجاوب تماما مع جميع الاجهزة -<br />
            تصميم عصري وانيق -<br />
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
      subtitle: 'اختبار الكتروني',
      body: 'نموزج اختبار الكتروني لدعم التعليم عن بعد',
      modal: {
        title: 'Quiz App',
        features: [
          <p>
            <strong>:لغات البرمجة المستخدمة</strong><br />
              - HTML5 <br />
              - CSS 3 <br />
              - Vanilla Javascript <br />
          </p>,

          <p>
            <strong>:المميزات</strong><br />
            اختيار اسئلة الاختبار عشوائيا من بنك الاسئلة -<br />
            ترتيب الاسئلة والاختيارات مختلف من طالب لاخر -<br />
            عداد تناولي للوقت المتبقى من الاختبار -<br />
            اظهار النتيجة في الحال بعد انهاء الاختبار -<br />
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

  ]
}
export default portfolio