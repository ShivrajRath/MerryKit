// Controller to add a product
addProductApp.controller('addProductCtrl', ['$scope', 'categoryService',
  function($scope, categoryService) {

    // Adds heirarchical categories in this array
    $scope.categoriesArr = [];

    // Next template url for product uploader
    $scope.nextHash = "";

    $scope.nextActive = false;

    // Adds an category item into the category array
    $scope.addToCategoryArr = function(item) {
      if (item && item.sub) {
        $scope.nextActive = false;
        $scope.categoriesArr.push(item.sub);
      } else {
        $scope.nextActive = true;
      }
    };

    // Clears the category array from the index. arrIndex starts with 1
    $scope.clearCategory = function(arrIndex) {
      $scope.categoriesArr.splice(arrIndex, $scope.categoriesArr.length - arrIndex);
    };

    // Called when any category change happens. 
    // It clears the next item in array and puts proper item instead
    $scope.categoryChange = function(index, key) {
      if (key) {

        // This creates the URL for the next partial, 
        // the category Param carries the category name
        if (index === 0) {
          $scope.nextHash = "#" + key;
        } else {
          $scope.categoryParam = key;
        }

        $scope.clearCategory(index + 1);
        $scope.addToCategoryArr($scope.categoriesArr[index][key]);
      } else {
        $scope.nextActive = false;
        $scope.clearCategory(index + 1);
      }
    };

    // Get all categories
    var categories = categoryService.query();

    $scope.categoriesArr.push(categories);
  }
]);
