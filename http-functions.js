
module.exports = function getHTML (options,cb) {

  var https = require('https');
  var buf = '';


    https.get(options, function(response) {
      response.setEncoding('utf8');

      response.on('data', function (data) {

      buf += data;
    });

    response.on('end', function() {
      cb(buf);
    });
  })
}
