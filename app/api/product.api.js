/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: API definations for all product activities
***********************************************************/

// load up models
var Book = require('../models/book.schema');
var Order = require('../models/order.schema');
var Price = require('../models/price.schema');
var Stock = require('../models/stock.schema');
var SellerProduct = require('../models/sellerproducts.schema');

module.exports = {
  addProduct: function(formData, productType, callback) {
    switch (productType) {
      case "books":
        this.addBook(formData, callback)
      default:
        callback(new Error('productType was not found'));
    }
  },

  addBook: function(formData, callback) {
    
  },

  addStockItem: function() {

  },

  addPriceItem: function() {

  }
}
