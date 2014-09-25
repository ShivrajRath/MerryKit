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
  costPrice: {
    type: Number,
    get: getPrice,
    set: setPrice
  },
  sellingPrice: {
    type: Number,
    get: getPrice,
    set: setPrice
  },
  tax: {
    type: Number,
    get: getPrice,
    set: setPrice
  }
});

function getPrice(num) {
  return (num / 100).toFixed(2);
}

function setPrice(num) {
  return num * 100;
}

module.exports = mongoose.model('Price', priceSchema);
