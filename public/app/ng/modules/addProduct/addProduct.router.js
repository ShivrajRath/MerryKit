// Router
addProductApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/addCategory', {
      templateUrl: '/app/ng/modules/addProduct/partials/addCategory.partials.html',
      controller: 'addProductCtrl'
    }).when('/books', {
      templateUrl: '/app/ng/modules/addProduct/partials/books.partials.html',
      controller: 'productFormCtrl'
    }).
    otherwise({
      redirectTo: '/addCategory'
    });
  }
]);
