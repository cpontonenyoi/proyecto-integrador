const express = require('express');
const app = express.Router();
const UserXCity = require('./userxcity.model');

app.post('/house', async function (req, res) {
    let userId = req.body.user;
    let cityId = req.body.city;
    let amount = req.body.amount;

    let userxcity = await UserXCity.create({ UserId: userId, CityId: cityId, amount: amount });

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