/*
Name: Uday Sidhu
Student Id: 301237202
Project : Midterm
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
