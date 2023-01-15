const router = require('express').Router();
const ProductRepo = require('../../repositories/product.repository')
const TopPickService = require('../../services/top-picks.service');

router.get('', async (req,res) => {
    let product = new ProductRepo(req);
    let lastPage = await product.getTotalPages();

    product.getProducts().then((prods) => {
        res.status(200).json({
            products: prods,
            last_page: lastPage,
            current_page: product.getCurrentPage(),
            sort: product.getSortingOrder()
        })
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            message: "Something went wrong"
        })
    })
});

router.get('/picks/:id', (req,res) => {
    let topPicks = new TopPickService(req.params.id);

    topPicks.getTopPicks().then((results) => {
        res.status(200).json({
            products: results
        })
    })
    .catch((error) => {
        res.status(400).json();
    })
})


module.exports = router;
