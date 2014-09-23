/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Price Schema
***********************************************************/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var priceSchema = new Schema({
  productId: String,
  itemId: String,
  costPrice: double,
  sellingPrice: double,
  tax: double
});

module.exports = mongoose.model('Price', priceSchema);
