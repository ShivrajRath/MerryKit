/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: This would contain all the common utilities
specific to the app
***********************************************************/

var lodash = require('lodash'),
  request = require('request');

module.exports = function() {
  return {
    // Returns categories
    getCategories: function() {
	return ["books"];
    }
  }
}
