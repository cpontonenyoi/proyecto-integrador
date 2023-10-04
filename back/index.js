const express = require('express');
require('./connect');
const userRouter = require('./user/user');
const cityRouter = require('./city/city');
const userxcityRouter = require('./userxcity/userxcity');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

app.use(userRouter);
app.use(cityRouter);
app.use(userxcityRouter);

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})