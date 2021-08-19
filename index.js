const express = require('express')
const { Sequelize } = require('sequelize');
var path = require('path');
const cookieParser = require("cookie-parser");
const routes = require('./routes/admin'); // import the routes

var bodyParser = require('body-parser');
var session = require('express-session')

const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000
app.use(expressLayouts)

app.use(bodyParser.urlencoded({extended: false}));

app.set('layout', './layout/layout');
app.use(cookieParser());
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(express.static("public"));

// db.sequelize.sync();
app.use('/', routes); //to use the routes


/*
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

*/


app.listen(port, () => {
    console.log(`Example app lisewwetening at http://localhost:${port}`);
})
/*
const db= require('./models');


db.sequelize.sync().then((res) =>  {
    app.listen(port, () => {
        console.log(`Example app lisewwetening at http://localhost:${port}`);
    })
});

*/