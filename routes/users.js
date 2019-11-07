var express = require('express')
var fs = require('fs')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource users router')
})

router.get('/chat', function(req, res, next) {
  fs.readFile('./views/index.pug', (err, data) => {
    if(err) {
      res.send('error')
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    }
  })
})

module.exports = router