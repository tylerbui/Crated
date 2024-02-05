const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: {
        type: String
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref: 'Category'
    },
    image:{
        type: String,
        require: true,
    }
})

module.exports = productSchema;