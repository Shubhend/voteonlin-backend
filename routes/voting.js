const express = require('express'); //import express

const router2  = express.Router();
// 2.
const votingcontroller = require('../controlers/VotingController');
// 3.


router2.get('/voting/', votingcontroller.index);


router2.get('/voting/create', votingcontroller.create);

module.exports = router2; // export to use in server.js