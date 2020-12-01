const express = require('express');
const router = express.Router();
const dishesController = require('../controllers/dishesController');

router.get('/', dishesController.index);

//router.get('/:category', dishesController.category);

router.get('/:category/:id', dishesController.details);

module.exports = router;