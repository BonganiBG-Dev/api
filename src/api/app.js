const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
const product = require('./routes/product.route');
const category = require('./routes/category.route');
const sites = require('./routes/site.route')

mongoose.connect(process.env.MONBO_DB)
.then(() => {
    console.log("Connected to Database");

    app.use('/product', product);
    app.use('/category', category);
    app.use('/site', sites);
})
.catch((error) => {
    console.log("Failed to connect to database");

    console.log(error);
});

module.exports = app;