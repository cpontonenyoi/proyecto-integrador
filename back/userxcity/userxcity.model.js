const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');
const City = require('../city/city.model');
const User = require('../user/user.model');

class UserXCity extends Model { }

UserXCity.init(
    {
        amount: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'UserXCity'
    }
);

UserXCity.belongsTo(User);
UserXCity.belongsTo(City);

UserXCity.sync({alter: true});

module.exports = UserXCity;