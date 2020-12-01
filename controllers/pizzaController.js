const pizzaModel = require('../models/pizzaModel');

exports.index = async (req, res, next) => {
    const pizzas = await pizzaModel.list();
    console.log('pizzas', pizzas);
  
    res.render('pizza/list', {pizzas});
};

exports.details = async (req, res, next) => {
    res.render('books/detail', await bookModel.get(req.params.id));
}