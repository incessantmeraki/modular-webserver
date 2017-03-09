var router = require('routes')()
var html = require('yo-yo')

module.exports = router

router.addRoute('/', function (m) {
  return `
    <h2>Index page</h2>
  `.toString()
})

router.addRoute('/test', function (m) {
  return `
    <h2>Test page</h2>
  `.toString()
})
