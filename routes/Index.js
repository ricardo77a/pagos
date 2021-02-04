
const express = require('express');
const router = express.Router();
var HomeController = require('../controllers/HomeController');

router.get('/', HomeController.index);

module.exports = router;