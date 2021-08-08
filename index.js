const express = require('express')
const { Sequelize } = require('sequelize');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('He World!')
})

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const db= require('./models');


db.sequelize.sync().then((res) =>  {
    app.listen(port, () => {
        console.log(`Example app lisewwetening at http://localhost:${port}`);
    })
});

