/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Book Schema
***********************************************************/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  productId: String,
  categoryName: String,
  itemId: String,
  booktitle: String,
  isbn10: String,
  isbn13: String,
  format: String,
  publicationyear: Number,
  edition: String,
  condition: String,
  productdescription: String,
  publisher: String,
  pages: String,
  tags: Array,
  images: Array,
  genre: Array
});

module.exports = mongoose.model('Book', bookSchema);
