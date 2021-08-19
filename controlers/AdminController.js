// newTea function for post tea route
const express = require('express')
const db = require('../models/index');
var bodyParser = require('body-parser')
var session = require('express-session')
const User = db.users;


exports.newTea = (req, res, next) => {
    checksession(req,res);
  //  console.log(req.session);

   res.render('admin/index', { title: 'Hey', message: 'Hello there!' })
};

exports.logout = (req, res, next) => {
    req.session.destroy();

    return res.redirect('/login');

};


function checksession(req,res){


    if (! req.session.loginemail) {
       return res.redirect('/login');

    }


}

exports.login = (req, res, next) => {

    if ( req.session.loginemail) {
        return res.redirect('/admin/index');

    }
   // checksession(req,res);

    if (req.method == 'POST') {

//console.log(db);
        User.findOne({ where: { email: req.body.email , password: req.body.password} }).then(data => {
if(data){


   req.session.loginemail = req.body.email;

      return res.redirect('/admin');

}else{
   return res.redirect("/login");

}

            }).catch(function(e) {
            console.error(e); // "oh, no!"
        })

                  return true;
    }

    res.render('admin/login',  { layout: './layout/layout2' })
};