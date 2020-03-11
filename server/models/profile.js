module.exports = function (sequelize, DataTypes) {
  return sequelize.define('profiles', {

    idProfile: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  })
}
