const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const SiteSchema = new Schema({
    siteId: Number,
    siteName: String,
})

const Site = Mongoose.model('site', SiteSchema);

module.exports = Site;