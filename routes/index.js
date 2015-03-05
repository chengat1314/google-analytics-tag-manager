'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'San Diego Code Camp' });
});
/* Get Signup page. */
router.get('/signup', function(req, res) {
  res.render('signup', { title: 'San Diego Code Camp' });
});

module.exports = router;
