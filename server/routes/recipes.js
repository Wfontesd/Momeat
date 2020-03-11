const sequelize = require('../core/sequelize')
sequelize.import('../models/recipes.js')

module.exports = function (router) {
  router.route('/recipes')
    .get((req, res) => {
      sequelize.query('SELECT * FROM recipes LIMIT 5').spread(function (results, metadata) {
        res.json(results)
      })
    })
  router.route('/recipes/:idRecipe')
    .put((req, res) => {
      res.json('One Recipe Get !')
    })
  router.route('/recipe')
    .post((req, res) => {
      res.json('Recipe post ! ')
    })
  router.route('/recipe/:idRecipe')
    .post((req, res) => {
      res.json('Recipe put !')
    })
  router.route('/recipe/:idRecipe')
    .delete((req, res) => {
      res.json('Recipe delete!')
    })
}
