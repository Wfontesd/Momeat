module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {

    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  })
}
