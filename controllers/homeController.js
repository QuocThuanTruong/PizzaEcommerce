const pizzaModel = require('../models/pizzaModel')
const drinkModel = require('../models/drinkModel')
const sideModel = require('../models/sideModel')

exports.index = async (req, res, next) => {
    let dishes = []

    const pizzas = await pizzaModel.list();
    const pizza = [pizzas[0]]

    const drinks = await drinkModel.list();
    const drink = [drinks[0]]

    const sides = await sideModel.list();
    const side = [sides[0]]

    dishes = dishes.concat(pizzas)
    dishes = dishes.concat(drinks)
    dishes = dishes.concat(sides)

    res.render('index/body', {pizzas, pizza, drink, side});
};

exports.about = (req, res, next) => {
    res.render('index/about', {})
}

exports.blog = (req, res, next) => {
    res.render('index/blog', {})
}

exports.contact = (req, res, next) => {
    res.render('index/contact', {})
}