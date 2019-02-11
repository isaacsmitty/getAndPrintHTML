var getHTML = require('../http-functions');

  function printReverse (html) {
    html = html.split('').reverse().join('');
    console.log(html);
  };

getHTML ({
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}, printReverse);