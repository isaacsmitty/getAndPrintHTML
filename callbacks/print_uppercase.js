var getHTML = require('../http-functions');

  function printUpperCase (html) {
    html = html.toUpperCase();
    console.log(html);
  };

getHTML ({
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}, printUpperCase);