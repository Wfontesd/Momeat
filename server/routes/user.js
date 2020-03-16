const sequelize = require('../core/sequelize')
sequelize.import('../models/user.js')
const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function (router) {
  router.route('/register')
    .post((req, res) => {
      sequelize.query('INSERT INTO users (username,password) VALUES ($1,$2)',
        {bind: [req.body.username, req.body.password]}).then(function (user) {
        let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400})
        res.status(200).send({ auth: true, token: token, user: user })
      })
    })
  router.route('/user/:login')
    .get((req, res) => {
      res.json('Get user!')
    })
  router.route('/user/:idUser')
    .put((req, res) => {
      res.json('Put user!')
    })
  router.route('/users')
    .get((req, res) => {
      res.json('Get Users !')
    })
}
