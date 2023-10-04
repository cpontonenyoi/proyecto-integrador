const express = require('express');
const app = express.Router();
const User = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto')


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

app.get('/user', auth, async function (req, res) {
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

app.post('/user/signup', async function (req, res) {
    let name = req.body.name;
    let correo = req.body.correo;
    let password = req.body.password;

    let user = await User.create({ correo, password });

    await user.save();

    const token = await jwt.sign({id: user.id}, '12345', { expiresIn: '180000s' });

    res.send({token});
});

app.post('/user/signin', async function (req, res) {
    let name = req.body.name;
    let password = req.body.password;

    let user = await User.findOne({ name, password });

    if(!user) {
        throw new Error("Usuario o contraseña no existe");
    }

    const token = await jwt.sign({id: user.id}, '12345', { expiresIn: '180000s' });

    res.send({token});
});

module.exports = app;
