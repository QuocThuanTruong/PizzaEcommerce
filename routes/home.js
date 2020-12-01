const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/', homeController.index)

router.get('/about', homeController.about)

router.get('/blog', homeController.blog)

router.get('/contact', homeController.contact)

module.exports = router;
