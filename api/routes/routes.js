let { Router } = require('express')

let router = Router()

import auth from '../controllers/auth'
import score from '../controllers/score'

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

router.post('/Refresh', auth.refreshVueX)

router.get('/score',score.getScore)

router.post('/userscore',score.userScore)

module.exports = router