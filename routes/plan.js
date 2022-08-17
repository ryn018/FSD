const express = require('express')
const path = require('path')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))


router.get('/alappuzha', ensureGuest, (req, res) => {
    res.render('plan/alappuzha', {
      layout: 'alappuzhap',
    })
  })

  router.get('/ernakulam', ensureGuest, (req, res) => {
    res.render('plan/ernakulam', {
      layout: 'ernakulamp',
    })
  })
  router.get('/idukki', ensureGuest, (req, res) => {
    res.render('plan/idukki', {
      layout: 'idukkip',
    })
  })
  router.get('/kannur', ensureGuest, (req, res) => {
    res.render('plan/kannur', {
      layout: 'kannurp',
    })
  })

  router.get('/kasargod', ensureGuest, (req, res) => {
    res.render('plan/kasargod', {
      layout: 'kasargod',
    })
  })

  router.get('/kollam', ensureGuest, (req, res) => {
    res.render('plan/kollam', {
      layout: 'kollamp',
    })
  })

  router.get('/kottayam', ensureGuest, (req, res) => {
    res.render('plan/kottayam', {
      layout: 'kottayamp',
    })
  })

  router.get('/kozhikode', ensureGuest, (req, res) => {
    res.render('plan/kozhikode', {
      layout: 'kozhikodep',
    })
  })

  router.get('/malappuram', ensureGuest, (req, res) => {
    res.render('plan/malappuram', {
      layout: 'malappuramp',
    })
  })

  router.get('/palakkad', ensureGuest, (req, res) => {
    res.render('plan/palakkad', {
      layout: 'palakkadp',
    })
  })
  router.get('/pathanamthitta', ensureGuest, (req, res) => {
    res.render('plan/pathanamthitta', {
      layout: 'pathanamthittap',
    })
  })
  router.get('/thrissur', ensureGuest, (req, res) => {
    res.render('plan/thrissur', {
      layout: 'thrissurp',
    })
  })

  router.get('/tvm', ensureGuest, (req, res) => {
    res.render('plan/tvm', {
      layout: 'tvmp',
    })
  })
  router.get('/wayanad', ensureGuest, (req, res) => {
    res.render('plan/wayanad', {
      layout: 'wayanadp',
    })
  })

  router.get('/thrissur/thp1', ensureGuest, (req, res) => {
    res.render('details/thp1', {
      layout: 'thp1',
    })
  })










  module.exports = router
  