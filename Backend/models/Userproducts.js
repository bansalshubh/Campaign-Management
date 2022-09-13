const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    camp:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
})

module.exports = mongoose.model('user-product',productSchema);