var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbSetting = require('./src/config/env.config')
var env=require('./src/config/env.config')

var auth = require('./src/routes/auth.route');
// var dashboard = require('./src/routes/dashboard.route');

var app = express();

app.set('dbSetting', dbSetting);


// Setup database _connection
let SETTINGS = app.get('dbSetting');
let db = require("./src/components/db").connect(SETTINGS);

app.set('db', db);


// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', "*");
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../fontend/client')));

app.use('/apiV1/auth', auth);
// app.use('/apiV1/dashboard', dashboard);

app.use('*',(req,res)=>{
  console.log(path.join(__dirname, '../fontend/client/index.html'))
  return res.sendFile(path.join(__dirname, '../fontend/client/index.html'))

})

module.exports = app;
