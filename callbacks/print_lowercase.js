var getHTML = require('../http-functions');

  function printLowercase (html) {
    html = html.toLowerCase();
    console.log(html);
  };

getHTML ({
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}, printLowercase);