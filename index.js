const express = require('express')
const { Sequelize } = require('sequelize');
var path = require('path');

const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000
app.use(expressLayouts)
app.set('layout', './layout/layout');
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', path.join(__dirname, '/views'));




app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
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

