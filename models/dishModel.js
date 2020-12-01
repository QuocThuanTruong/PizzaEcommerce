const {db} = require('../dal/db');
const {ObjectId} = require('mongodb');

const pizzaModel = require('../models/pizzaModel')
const drinkModel = require('../models/drinkModel')
const sideModel = require('../models/sideModel')

exports.list = async () => {
    let dishes = []

    const pizzas = await pizzaModel.list();
    const drink = await drinkModel.list();
    const side = await sideModel.list();

    dishes = dishes.concat(pizzas)
    dishes = dishes.concat(drink)
    dishes = dishes.concat(side)

    return dishes;
}

exports.get = async (id) => {
    let dishes = []

    const pizzas = await pizzaModel.list();
    const drink = await drinkModel.list();
    const side = await sideModel.list();

    dishes = dishes.concat(pizzas)
    dishes = dishes.concat(drink)
    dishes = dishes.concat(side)

    let dish = dishes.filter(d => d._id == id)

    return dish;
}