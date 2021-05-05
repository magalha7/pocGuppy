const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({

    titulo:String,
});

module.exports = mongoose.model('Nome Schema',schema)

//import in controller
const mongoose =  require('mongoose')
const Product = mongoose.model('Nome Schema')

// into controller ex:exports.post()=>{
//     var product = new Product(req.body)
//      product.save();
// }