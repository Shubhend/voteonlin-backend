// newTea function for post tea route
const express = require('express')
const db = require('../models/index');
var bodyParser = require('body-parser')
const User = db.users;

exports.newTea = (req, res, next) => {

    console.log("sfsdfsd");
   res.render('admin/index', { title: 'Hey', message: 'Hello there!' })
};


exports.login = (req, res, next) => {

    if (req.session.loginemail) {
        req.session.destroy();
        res.redirect('/login');

    }


    if (req.method == 'POST') {

//console.log(db);
        User.findOne({ where: { email: req.body.email , password: req.body.password} }).then(data => {
if(data){
    req.session.loginemail = req.body.email;

    res.send(" found");
}else{
    res.send("not found");
}

            });



        return true;
    }

    res.render('admin/login', { title: 'Hey', message: 'Hello there!' })
};