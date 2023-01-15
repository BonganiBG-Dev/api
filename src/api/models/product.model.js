const mongoose = require('mongoose');

const stringParams = {type: String, required: true}
const numberParams = {type: Number, required: true}

const product = mongoose.Schema({
    _id: stringParams,
    Name: stringParams,
    Category_id: stringParams,
    Site_id: stringParams,
    Img_url: stringParams,
    Page_link: stringParams,
    Series_id: stringParams,
    Price: numberParams,
    Last_updated: {type: Date, required: true},
    Price_history: {
        type: Array,
        Price: numberParams,
        Updated_on: {type: Date, required: true}
    }
});

module.exports = mongoose.model('Product', product);