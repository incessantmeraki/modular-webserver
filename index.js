var router = require('./router.js')
var fs = require('fs')
var http = require('http')
var hyperstream = require('hyperstream')

var server = http.createServer( function (req, res) {
  // pas requested url path to router
  var m = router.match(req.url)

  //invoke render function
  if (m) 
    render(m)
  else 
    res.end('404 not found')

  //templating engine
  function render(m) {
    var html = m.fn(m)
    fs.createReadStream('./public/index.html')
      .pipe(hyperstream( {
        '#container': html
      }))
      .pipe(res)
  }

})

server.listen(8000)
