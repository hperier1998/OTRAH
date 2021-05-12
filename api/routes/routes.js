let { Router } = require('express')

let router = Router()

import auth from '../controllers/auth'

router.post('/Users', auth.register)

router.get('/Users', (req, res)=>{
  res.send('plop')
})

router.use('/Users', (req, res) => {
  res.send(req)
})

module.exports = router