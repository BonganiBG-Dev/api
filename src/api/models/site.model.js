const mongoose = require('mongoose');

const stringParams = {type: String, required: true}


const site = mongoose.Schema({
    _id: stringParams,
    Name: stringParams,
    Logo_url: stringParams,
    Website_link: stringParams,
    Last_updated: {type: Date, required: true}
})

module.exports = mongoose.model('Site', site);