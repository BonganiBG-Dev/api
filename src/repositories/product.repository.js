const Product = require('../api/models/product.model')

class ProductRepo {
    constructor(request){
        this.params = {
            limit: request.query.limit || 20,
            page: request.query.page || 1,
            search: request.query.q || "",
            category: request.query.c || "",
            sort: request.query.sort || {field: "Price", order: 1}
        }
    }

    async getProducts(){
        let results = await Product.find({"Name": {"$regex": this.params.search, "$options": "i"}, "Category_id": {"$regex": this.params.category}})
        .sort([[this.params.sort.field, this.params.sort.order]])
        .limit(this.params.limit)
        .skip(this.skipPages())        
        return results;
    }

    async getTotalPages(){
        let total = await Product.find({"Name": {"$regex": this.params.search, "$options": "i"}, "Category_id": {"$regex": this.params.category}})
                            .count();
        let pages = total / this.params.limit;
        
        return Math.ceil(pages);
    }

    getSortingOrder(){
        return this.params.sort;
    }

    getCurrentPage(){
        return this.params.page;
    }

    skipPages(){
        return (this.params.page - 1) * this.params.limit;
    }
}

module.exports = ProductRepo;