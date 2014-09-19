/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Routes
***********************************************************/
// Seller  Model
// Model is an instance for db entry

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var sellerSchema = new Schema({
  companyname: String,
  companydisplayname: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  pincode: Number,
  landline: Number,
  mobile: Number,
  categories: [String],

  firstname: String,
  lastname: String,
  email: String,
  password: String,

  panno: String,
  tanno: String,
  companyregno: String,
  vattincstno: String,
  bankname: String,
  branchname: String,
  beneficiaryname: String,
  accountNo: String,
  typeofaccount: String,
  rtgsneftifsccode: String,

  _sellerApproved: Boolean
});

// methods ======================
// generating a hash
sellerSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
sellerSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Seller', sellerSchema);
