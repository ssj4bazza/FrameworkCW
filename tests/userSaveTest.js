const mocha = require('mocha');
const assert = require('assert');
const User = require('../models/user');

//describe test
describe('Saving records', function(){
    //create the tests
    it('Saves a user record to the database', function(done){
        var user = new User({
            userId: 1,
            firstName: 'Heero',
            Surname: 'Yuii',
            site: {
                siteId: 1,
                siteName: '  '
            }
        })
        User.save().then(function(){
            assert(user.isNew === false);
            done();
        })
    })
})