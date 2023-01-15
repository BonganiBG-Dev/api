const Product = require('../api/models/product.model');
const jsonFile = require('../../stores.json');
const { param } = require('../api/routes/product.route');
require('dotenv').config();

class TopPicksService{

    constructor(id){
        this.id = id;
    }

    async getTopPicks(){
        return await Product.find({"Site_id": this.id},{"Page_link": 0, "Series_id": 0, "Last_updated": 0, "Price_history": 0, "Category_id": 0}).sort([["Price", -1]]).limit(5);
    }
}

module.exports = TopPicksService;