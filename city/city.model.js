const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');

class City extends Model { }

City.init(
    {
        name: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'City'
    }
);


City.sync();

module.exports = City;