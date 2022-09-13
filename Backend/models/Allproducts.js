const mongoose = require('mongoose');
const { Schema } = mongoose;

const allproductSchema = new Schema({
    title : {
        type:String,
        required:true
    },
    price : {
        type:String,
        required:true
    },
});

module.exports = mongoose.model('allproducts',allproductSchema);
