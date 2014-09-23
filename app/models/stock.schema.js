/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Stock Schema
***********************************************************/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
  productId: String,
  itemId: String,
  qty: Number,
  dateofarrival: Date
});

module.exports = mongoose.model('Stock', stockSchema);
