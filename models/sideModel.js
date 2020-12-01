const {db} = require('../dal/db');
const {ObjectId} = require('mongodb');

class Side {
    constructor(_id, name, avatar, description, cover, images, price) {
        this._id = _id
        this.category = "side"
        this.name = name
        this.avatar = avatar
        this.description = description
        this.cover = cover
        this.images = images
        this.price = price
    } 
}

exports.list = async () => {
    const sideCollection = db().collection('Drink');
    const sides = await sideCollection.find({}).toArray();
    
    console.dir(sides);

    return sides;
}

exports.get = async (id) => {
    const sideCollection = db().collection('Drink');
    const side = await sideCollection.findOne({_id: ObjectId(id)})

    return side;
}
