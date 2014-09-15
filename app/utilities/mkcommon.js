/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: This would contain all the common utilities
specific to the app
***********************************************************/

var lodash = require('lodash');

module.exports = {
  // Returns categories
  getCategories: function() {
    var categories = require('../setup/categories.json');
    console.log(categories);
    return categories;
  }
};
