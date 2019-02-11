var https = require('https');
var buf = '';

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {

    buf += data;
  });

 response.on('end', function() {
    console.log(buf);
    console.log('Response stream complete.');
  });

  })
}
getAndPrintHTMLChunks ();