var express = require('express')
var router = express.Router()

router.post('/sayHello', (req, res) => {
  console.log('/sayHello')
  const responseBody = {
    version: 2.0,
    template: {
      outputs: [
        {
          simpleText: {
            text: "Hi, nice to meet you."
          }
        }
      ]
    }
  }
  res.status(200).send(responseBody)
})

router.post('/showHello', (req, res) => {
  console.log(req.body)

  const responseBody = {
    version: 2.0,
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan"
          }
        }
      ]
    }
  }

  res.status(200).send(responseBody)
})

module.exports = router