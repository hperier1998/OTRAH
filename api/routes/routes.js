let { Router } = require('express')

let router = Router()

import auth from '../controllers/auth'

router.post('/Users', auth.register)

router.get('/Users', (req, res)=>{
  res.send('plop')
})

router.post('/Login', auth.login)

router.get('/Login', (req, res) => {
  res.send('foo')
})

module.exports = router