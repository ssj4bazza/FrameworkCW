const mongoose = require('mongoose');
const schema = mongoose.Schema;
const site = require('../models/site')


const UserSchema = new schema({
    userId: {type:Number, required:true},
    firstName: {type:String, required:true},
    Surname: {type:String, required:true},
    password: {type:String, required:true},
    site: {type:String, required:true},
    email: {type:String, required:true},
})

const user = mongoose.model('user', UserSchema);
module.exports = user;