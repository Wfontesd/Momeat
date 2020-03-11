module.exports = function (sequelize, DataTypes) {
  return sequelize.define('recipes', {
    idRecipe: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    label: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5
      }
    },
    ingredients: DataTypes.ARRAY(DataTypes.DECIMAL),
    instructions: DataTypes.ARRAY(DataTypes.STRING)
  })
}
