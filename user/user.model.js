const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');

class User extends Model { }

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