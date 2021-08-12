const express = require('express'); //import express


const router  = express.Router();
// 2.
const teaController = require('../controlers/AdminController');
// 3.


router.get('/', teaController.newTea);

router.get('/login', teaController.login);

router.post('/login', teaController.login);

// 4.
module.exports = router; // export to use in server.js