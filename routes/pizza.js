const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

/* GET list of books. */
router.get('/', pizzaController.index);
router.get('/:id', pizzaController.details);

module.exports = router;