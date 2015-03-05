'use strict';
var express = require('express');
var app = express();

/* Post form data and show thank you. */
app.post('/users', function(req, res) {
  //TODO: handle submission of data.
  res.send('Thanks!');
});

module.exports = app;
