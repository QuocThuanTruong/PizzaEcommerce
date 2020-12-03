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

    let dishForBiding = []

    switch (category) {
        case 'pizza' : 
            const pizza = await pizzaModel.get(req.params.id)

            res.render('dishes/pizza_detail', pizza)
            break

        case 'drink' : 
            const drink = await drinkModel.get(req.params.id)

            res.render('dishes/drink_detail', drink)
            break

        case 'side' : 
            const side = await sideModel.get(req.params.id)

            res.render('dishes/side_detail', side)
            break
    }
    
}
