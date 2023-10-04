const { Sequelize } = require('sequelize');

//driver://user:password@host:port/database
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/tienda2');

module.exports = sequelize;