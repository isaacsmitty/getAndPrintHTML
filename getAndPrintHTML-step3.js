var https = require('https');
var buf = '';
var options = {}

function getAndPrintHTMLChunks (options) {

  var requestOptions = options;

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
getAndPrintHTMLChunks ({
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
});