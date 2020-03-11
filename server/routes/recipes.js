
module.exports = function (router) {
  router.route('/recipes')
    .get((req, res) => {
      res.json('All Recipes Ge!')
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
