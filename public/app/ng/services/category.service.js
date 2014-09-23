var getCategoryService = angular.module('services', ['ngResource']);

getCategoryService.factory('getCategory', ['$resource',
  function($resource) {
    return $resource('/api/getCategories/:productType', {}, query: {
      method: 'GET',
      params: {
        productType: 'all'
      }
    })
  }
]);
