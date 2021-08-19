const express = require('express'); //import express

var session = require('express-session')
const router  = express.Router();
// 2.
const teaController = require('../controlers/AdminController');
// 3.

const votingcontroller = require('../controlers/VotingController');
// 3.


router.get('/voting/', votingcontroller.index);


router.get('/voting/create', votingcontroller.create);


router.get('/admin', teaController.newTea);

router.get('/', teaController.login);

router.get('/login', teaController.login);

router.post('/login', teaController.login);

router.get('/admin/logout', teaController.logout);





// 4.
module.exports = router; // export to use in server.js