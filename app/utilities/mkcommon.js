/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: This would contain all the common utilities
specific to the app
***********************************************************/

var lodash = require('lodash');

module.exports = {
  // Returns categories
  getCategories: function(categoryId) {
    var categories = {};
    try {
      categories = require('../categories/' + categoryId + '.categories.json');
      return categories;
    } catch (ex) {
      log.info('Category Id: "' + categoryId + '" not present');
    }
    return categories;
  }
};
