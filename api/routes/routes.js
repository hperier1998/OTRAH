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

router.post('/Modify', auth.modify)

router.get('/Modify', (req, res) => {
  res.send('noo')
})

module.exports = router