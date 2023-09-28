const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');

class User extends Model { }

/*
Tabla user en la base de datos
*/

User.init(
    {
        name: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        modelName: 'User'
    }
);

User.sync();

module.exports = User;