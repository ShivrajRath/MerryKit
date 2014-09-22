// Controller to add a product
addProductApp.controller('addProductCtrl', ['$scope',
  function($scope) {

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
        if (index === 0) {
          $scope.nextHash = "#" + key;
        }
        $scope.clearCategory(index + 1);
        $scope.addToCategoryArr($scope.categoriesArr[index][key]);
      } else {
        $scope.nextActive = false;
      }
    };

    // Scope watch

    // $scope.$watch('secondCategory',)

    var categories = {
      "books": {
        "name": "Books",
        "cid": "C_1",
        "sub": {
          "fiction": {
            "name": "Fiction",
            "cid": "C_1.1",
            "sub": {
              "literaturenfiction": {
                "name": "Literature and Fiction",
                "cid": "C_1.1.1"
              },
              "indianwriting": {
                "name": "Indian Writing",
                "cid": "C_1.1.2"
              }
            }
          },
          "nonfiction": {
            "name": "Non Fiction",
            "cid": "C_1.2",
            "sub": {
              "biographies": {
                "name": "Biographies",
                "cid": "C_1.2.1"
              },
              "businessneco": {
                "name": "Business and economics",
                "cid": "C_1.2.2"
              }
            }
          },
          "textbooks": {
            "name": "Text Books",
            "cid": "C_1.3"
          },
          "studyaids": {
            "name": "Study Aids",
            "cid": "C_1.4"
          }
        }
      },
      "homeandkitchen": {
        "name": "Home and Kitchen",
        "cid": "c_2"
      }
    }

    $scope.categoriesArr.push(categories);
  }
]);
