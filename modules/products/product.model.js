const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    stockName : String,
    transactionType : {
        type : String,
        required : true
        // enum : ["Buy", "Sell"]
    },
    quantity :{
        type : Number,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    transactionDate : Date,
   

})

module.exports = mongoose.model('product', ProductSchema);