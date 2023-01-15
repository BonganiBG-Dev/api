const router = require('express').Router();
const Site = require('../models/site.model');
const SiteRepo = require('../../repositories/site.repository')

router.get('', (req,res) => {
    let site = new SiteRepo();

    site.getSite().then((results) => {
        res.status(200).json({
            sites: results
        });
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json();
    })
})

module.exports = router;