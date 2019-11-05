var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource users router')
})

router.get('/details', function(req, res, next) {
  res.send('hi')
})

module.exports = router