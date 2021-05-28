const mongoose = require('mongoose')
 const schema = new mongoose.Schema({
     name:String,
     tech:String,
     salary:Number
 },{
     timestamps:true
 })

 module.exports = mongoose.model('Entity',schema)