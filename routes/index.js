const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Story = require('../models/Story')
const Trip = require('../models/Trip')



// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('index', {
    layout: 'index',
  })
})

router.get('/destination', ensureGuest, (req, res) => {
  res.render('destination', {
    layout: 'index',
  })
})

router.get('/plan', ensureGuest, (req, res) => {
  res.render('plan', {
    layout: 'plan',
  })
})

router.get('/login', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})
// router.get('/destination/alappuzha', ensureGuest, (req, res) => {
//   res.render('alappuzha', {
//     layout: 'alappuzha',
//   })
// })

// @desc    Dashboard
// @route   GET /dashboa
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      name: req.user.firstName,
      stories,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

module.exports = router



