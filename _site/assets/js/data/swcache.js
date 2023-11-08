const resource = [
  /* --- CSS --- */
  '/ShruthikaV/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/ShruthikaV/app.js',
  '/ShruthikaV/sw.js',

  /* --- HTML --- */
  '/ShruthikaV/index.html',
  '/ShruthikaV/404.html',

  
    '/ShruthikaV/categories/',
  
    '/ShruthikaV/tags/',
  
    '/ShruthikaV/archives/',
  
    '/ShruthikaV/about/',
  
    '/ShruthikaV/contact/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/ShruthikaV/assets/img/favicons/.DS_Store',
    '/ShruthikaV/assets/img/favicons/favicon-16x16.png',
    '/ShruthikaV/assets/img/favicons/favicon-32x32.png',
    '/ShruthikaV/assets/img/favicons/favicon.ico',
    '/ShruthikaV/assets/img/favicons/mstile-150x150.png',
    '/ShruthikaV/assets/js/dist/categories.min.js',
    '/ShruthikaV/assets/js/dist/commons.min.js',
    '/ShruthikaV/assets/js/dist/home.min.js',
    '/ShruthikaV/assets/js/dist/misc.min.js',
    '/ShruthikaV/assets/js/dist/page.min.js',
    '/ShruthikaV/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

