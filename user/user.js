const express = require('express');
const app = express.Router();
const User = require('./user.model');

app.get('/user',  async function (req, res) {
    let users = await User.findAll();

    res.send(users);
})

app.post('/user', async function (req, res) {
    let name = req.body.name;
    let cityId = req.body.city;

    let user = await User.create({ name: name, CityId: cityId });

    await user.save();
    res.send("su ciudad ha sido creada con éxito");
});

module.exports = app;
