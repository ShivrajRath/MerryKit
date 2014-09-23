/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Schema to store a seller and product information
***********************************************************/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sellerProductSchema = new Schema({
  sellerId: String,
  productId: String,
  itemId: String
});

module.exports = mongoose.model('SellerProduct', sellerProducSchema);
