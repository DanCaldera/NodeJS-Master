// Primary file

//* Dependencies
var http = require('http')
var url = require('url')

//* The server should respond to all requests with a string
var server = http.createServer(function (req, res) {
  // Get the url and parse it
  var parsedUrl = url.parse(req.url, true)

  // Get the path
  var path = parsedUrl.pathname
  var trimmedPath = path.replace(/^\/+|\/+$/g, '')

  // Get the query string as an object
  //TODO Fix this
  var queryStringObject = parsedUrl.query

  // Get the http method
  var method = req.method.toLowerCase()

  // Send the response
  res.end('Hello World\n')

  // Log the request
  console.log(
    'Request Received on path: ',
    trimmedPath,
    ' with method: ',
    method,
    ' and with this queryStringString Parameters: ',
    queryStringObject
  )
})

//* Start the server and keep it listening at port 3005
server.listen(3005, function () {
  console.log('The server is listening at port 3005')
})
