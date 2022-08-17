const express = require('express')
const path = require('path')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))


router.get('/alappuzha', ensureGuest, (req, res) => {
    res.render('districts/alappuzha', {
      layout: 'alappuzha',
    })
  })

  router.get('/ernakulam', ensureGuest, (req, res) => {
    res.render('districts/ernakulam', {
      layout: 'ernakulam',
    })
  })
  router.get('/idukki', ensureGuest, (req, res) => {
    res.render('districts/idukki', {
      layout: 'idukki',
    })
  })
  router.get('/kannur', ensureGuest, (req, res) => {
    res.render('districts/kannur', {
      layout: 'kannur',
    })
  })

  router.get('/kasargod', ensureGuest, (req, res) => {
    res.render('districts/kasargod', {
      layout: 'kasargod',
    })
  })

  router.get('/kollam', ensureGuest, (req, res) => {
    res.render('districts/kollam', {
      layout: 'kollam',
    })
  })

  router.get('/kottayam', ensureGuest, (req, res) => {
    res.render('districts/kottayam', {
      layout: 'kottayam',
    })
  })

  router.get('/kozhikode', ensureGuest, (req, res) => {
    res.render('districts/kozhikode', {
      layout: 'kozhikode',
    })
  })

  router.get('/malappuram', ensureGuest, (req, res) => {
    res.render('districts/malappuram', {
      layout: 'malappuram',
    })
  })

  router.get('/palakkad', ensureGuest, (req, res) => {
    res.render('districts/palakkad', {
      layout: 'palakkad',
    })
  })
  router.get('/pathanamthitta', ensureGuest, (req, res) => {
    res.render('districts/pathanamthitta', {
      layout: 'pathanamthitta',
    })
  })
  router.get('/thrissur', ensureGuest, (req, res) => {
    res.render('districts/thrissur', {
      layout: 'thrissur',
    })
  })

  router.get('/tvm', ensureGuest, (req, res) => {
    res.render('districts/tvm', {
      layout: 'tvm',
    })
  })
  router.get('/wayanad', ensureGuest, (req, res) => {
    res.render('districts/wayanad', {
      layout: 'wayanad',
    })
  })









  module.exports = router
  