var services = angular.module('services', ['ngResource']);

services.factory('categoryService', ['$resource',
  function($resource) {
    return $resource('/api/getCategories/:productType', {}, {
      query: {
        method: 'GET',
        params: {
          productType: 'all'
        }
      }
    })
  }
]);

services.factory('ProductUploadService', ['$resource',
  function($resource) {
    return $resource('/api/addProduct/:product_type', {
      product_type: "@productType"
    }, {
      save: {
        method: 'POST'
      }
    })
  }
]);
