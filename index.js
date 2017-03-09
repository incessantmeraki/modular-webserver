var router = require('./router.js')
var http = require('http')
var hyperstream = require('hyperstream')

var server = http.createServer( function (req, res) {
  // pass in requested path to router
  var m = router.match(req.url)

  //if there is route for path
  if (m) 
    res.end(m.fn(m)) //reply back with output of function in routes
  else 
    res.end('Path not found')
})

server.listen(8000)
