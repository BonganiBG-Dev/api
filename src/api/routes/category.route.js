const router = require('express').Router();
const Category = require('../../repositories/category.repository');


router.get('', (req,res) => {
    let category = new Category();

    category.getCategoryNamesAndIDs().then((results) => [
        res.status(200).json({
            categories: results
        })
    ])
    .catch(() => {
        res.status(400).json({})
    })
});

module.exports = router;