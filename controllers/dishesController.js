const {db} = require('../dal/db');
const {ObjectId} = require('mongodb');

const dishModel = require('../models/dishModel')
const pizzaModel = require('../models/pizzaModel')
const drinkModel = require('../models/drinkModel')
const sideModel = require('../models/sideModel')

exports.index = async (req, res, next) => {
    let dishes = await dishModel.list()
    
    res.render('dishes/list', {dishes});
};

exports.category = async (req, res, next) => {
    const dishesCollection = db().collection(req.params.category);

    const dishes = await dishesCollection.find({}).toArray();

    console.log(dishes)

    res.render('index/body', {dishes});
}

exports.details = async (req, res, next) => {
    const category = req.params.category

    let dish = {}
    let dishForBiding = []

    switch (category) {
        case 'pizza' : 
            dish = await pizzaModel.get(req.params.id)

            dishForBiding = [dish]

            const size = dish.size
            const dough = dish.dough
            const toping = dish.toping

            res.render('dishes/pizza_detail', {dish: dishForBiding, size, dough, toping})
            break

        case 'drink' : 
            dish = await drinkModel.get(req.params.id)

            dishForBiding = [dish]

            res.render('dishes/drink_detail', {dish: dishForBiding})
            break

        case 'side' : 
            dish = await sideModel.get(req.params.id)

            dishForBiding = [dish]

            res.render('dishes/side_detail', {dish: dishForBiding})
            break
    }
    
}
