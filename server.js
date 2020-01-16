// server.js
// load the things we need
var express = require('express');
const mongoose = require('mongoose');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect('mongodb://localhost/tsmms')
mongoose.connection.once('open', function(){
    console.log('mongo connection made');
}).on('error', function(error){
    console.log('Connection Error: ', error);
});

//serve static files
app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// files page 
app.get('/files', function(req, res) {
    res.render('pages/files');
});

// users page 
app.get('/users', function(req, res) {
    res.render('pages/users');
});

// sites page 
app.get('/sites', function(req, res) {
    res.render('pages/sites');
});

// chat page 
app.get('/chat', function(req, res) {
    res.render('pages/chat');
});

app.listen(8080);
console.log('8080 is up');