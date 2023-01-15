const Category = require('../api/models/category.model');

class CategoryRepo {

    constructor(request){}

    async getCategoryNamesAndIDs(){
        return await Category.find({},{"Name": 1});
    }

}


module.exports = CategoryRepo;