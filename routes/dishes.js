const express = require('express');
const router = express.Router();
const dishesController = require('../controllers/dishesController');

router.get('/', dishesController.index);

module.exports = router;