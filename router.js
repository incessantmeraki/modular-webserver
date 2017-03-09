var router = require('routes')()
var html = require('yo-yo')

module.exports = router


router.addRoute('/', function (m) {
  return `<body>
    <h1> Welcome to main Page </h1>
  `.toString()
})
