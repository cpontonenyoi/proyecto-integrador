const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');

class User extends Model { }

User.init(
    {
        name: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        iv: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
);

User.sync({alter: true});

module.exports = User;