const pizzaModel = require('../models/pizzaModel')

exports.index = async (req, res, next) => {
    const pizzas = await pizzaModel.list()

    res.render('index/body', {products: pizzas});
};

exports.about = (req, res, next) => {
    res.render('index/about', {})
}