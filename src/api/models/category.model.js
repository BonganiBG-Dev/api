const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const category = mongoose.Schema({
    _id: stringParams,
    Name: stringParams,
    product_ids: {type: Array, required: true},
    series_ids: {type: Array, required: true}
});

module.exports = mongoose.model('Category', category);