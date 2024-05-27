const express = require('express')
const app = express()
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
router.use('/profile', function(req, res, next) {
    console.log('Request URL:', req.originalUrl)
    res.end("profile")
    next()
  })
app.use(router)
app.listen(3000)