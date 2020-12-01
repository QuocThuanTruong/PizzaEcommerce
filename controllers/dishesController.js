const pizzaModel = require('../models/pizzaModel')
const drinkModel = require('../models/drinkModel')
const sideModel = require('../models/sideModel')

exports.index = async (req, res, next) => {
    let dishes = []

    const pizzas = await pizzaModel.list();
    const drink = await drinkModel.list();
    const side = await sideModel.list();

    dishes = dishes.concat(pizzas)
    dishes = dishes.concat(drink)
    dishes = dishes.concat(side)

    console.log(dishes)
    res.render('dishes/list', {});
};
