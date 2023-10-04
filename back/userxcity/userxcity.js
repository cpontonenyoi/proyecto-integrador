const express = require('express');
const app = express.Router();
const UserXCity = require('./userxcity.model');
const User = require('../user/user.model');
const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
    let token = req.headers['authorization'];
    let resultadoToken = jwt.verify(token, '12345');

    let usuario = await User.findOne({id: resultadoToken.id});
    if(!usuario) {
        throw new Error('usuario no existe');
    }

    req.user = usuario;

    next();
}

app.post('/house', auth, async function (req, res) {
    let user = req.user;
    let cityId = req.body.city;
    let address = req.body.address;
    let amount = req.body.amount;

    let userxcity = await UserXCity.create({ UserId: user.id, CityId: cityId, amount: amount, address });

    await userxcity.save();
    res.send("su ciudad ha sido creada con éxito");
});

app.patch('/house/:id', async function(req, res) {
    let id = req.params.id;
    let amount = req.body.amount;

    await UserXCity.upsert({id: id, amount: amount});

    res.send("la actualización fue exitosa");
});

module.exports = app;