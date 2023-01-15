const Site = require('../api/models/site.model');

class SiteRepo {
    constructor(){}

    async getSite(){
        return await Site.find();
    }
}

module.exports = SiteRepo;