
module.exports = function (router) {
  router.route('/profile/:idUser')
    .get((req, res) => {
      res.json('Profile user get !')
    })
  router.route('/profile/:idUser')
    .put((req, res) => {
      res.json('Profile user put!')
    })
  router.route('/profile/:idUser')
    .post((req, res) => {
      res.json('Profile user post')
    })
}
