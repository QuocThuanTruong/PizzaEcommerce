const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/', homeController.index)

router.get('/about', homeController.about)

router.get('/blog', homeController.about)

router.get('/contact', homeController.about)

module.exports = router;
