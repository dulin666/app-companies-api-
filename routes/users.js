const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/register', (req, res, next) => {
  User.find({}).then((users) => {
    res.send(users)
  })
})

// router.post('/companies', (req, res, next) => {
//   Company.create(req.body).then((company) => {
//     res.send(company)
//   }).catch(next)
// })
//
// router.put('/companies/:id', (req, res, next) => {
//   Company.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
//     Company.findOne({_id: req.params.id}).then((company) => {
//       res.send(company)
//     })
//   })
// })
//
// router.delete('/companies/:id', (req, res, next) => {
//   Company.findByIdAndRemove({_id: req.params.id}).then((company) => {
//     res.send(company)
//   })
// })
//
// router.get('/companies/:id', (req, res, next) => {
//   Company.findByIdAndUpdate({_id: req.params.id}).then(() => {
//     Company.findOne({_id: req.params.id}).then((company) => {
//       res.send(company)
//     })
//   })
// })

module.exports = router
