const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');

class City extends Model { }

/*
Automatizamos la tabla city
*/
City.init(
    {
        name: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        modelName: 'City'
    }
);


City.sync();

module.exports = City;