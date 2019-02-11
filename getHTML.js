var https = require('https');
var buf = '';
var options = {}

function getHTML (options,cb) {

  var requestOptions = options;

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {

    buf += data;
  });

  response.on('end', function() {
    cb(buf);
    //console.log(buf);
    //console.log('Response stream complete.');
    });
  })
}
  function printHTML (html) {
    console.log(html);
  };

getHTML ({
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}, printHTML);

