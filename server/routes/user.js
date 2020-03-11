module.exports = function (router) {
  router.route('/register')
    .post((req, res) => {
      res.json('user post !')
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
