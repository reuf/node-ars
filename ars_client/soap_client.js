var ping = require('ping')
var tcpp = require('tcp-ping')
var http = require('http')
var soap = require('strong-soap').soap
var fs  = require('fs')
var urls = require('./urls')
// var trans = require('./db')
var parseString = require('xml2js').parseString;

urls.forEach((url) => {
  var body = ''
  var wsdl = (url.path).substring((url.path).lastIndexOf('/') + 1).replace('?','.')
  try {
    http.get({
          hostname: url.server,
          path: url.path,
          agent: false
        }, (response) => {
        response.on('data', function (chunk) {
          body += chunk;
        })
        response.on('end', function () {
          fs.writeFile('./res/' + wsdl, body, (err,data) => {
            // trans(wsdl, body)
          })
        })
    })
  } catch(e) {
    console.error(e)
  }
})
