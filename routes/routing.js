var express = require('express');
var router = express.Router();
var fetchController= require('../contollers/fetch-controller');

router.get('/fetch-data',fetchController.product_all);

module.exports = router;