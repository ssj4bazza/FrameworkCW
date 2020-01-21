// server.js
// load the things we need
var express = require('express');
const mongoose = require('mongoose'); 
var app = express();
const bcrypt = require('bcrypt');

//models
user = require("./models/user")

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
app.use(express.urlencoded({extended: false}));

/*--------------------------------------------------
 ____             _            
|  _ \ ___  _   _| |_ ___  ___ 
| |_) / _ \| | | | __/ _ \/ __|
|  _ < (_) | |_| | ||  __/\__ \
|_| \_\___/ \__,_|\__\___||___/             
*/
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
//login
app.get('/login', function(req, res) {
    res.render('pages/login');
});
app.post('/login', function(req, res) {
    res.render('pages/login');
});
//register
app.get('/register', function(req, res) {
    res.render('pages/register');
});
app.post('/register', async function(req, res) {
    try{
        const hashedPasswword = await bcrypt.hash(req.body.password, 10)
        user.create({
            firstName: req.body.firstname,
            Surname: req.body.surname,
            password: hashedPasswword,
            email: req.body.email
        })
        res.redirect('/login')
    }catch{
        res.redirect('/register')
    } 
    console.log('errr')
});
/*------------------------------------------*/

app.listen(8080);
console.log('8080 is up');