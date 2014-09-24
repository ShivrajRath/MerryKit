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

services.factory('productUploadService', ['$resource',
  function($resource) {
    return $resource('/api/addProduct/:productType', {}, {
      save: {
        method: 'POST',
        params: {
          productType: 'all'
        }
      }
    })
  }
]);
