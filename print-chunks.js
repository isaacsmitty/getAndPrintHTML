var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    // var body ='';
  response.on('data', function (data) {

    console.log('Chunk Received. Length: ', data.length, data + '\n');
  });

    //console.log(response);
  })

}
getAndPrintHTMLChunks ();