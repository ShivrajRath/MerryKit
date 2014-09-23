/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Product Form Controller. 
***********************************************************/

addProductApp.controller('productFormCtrl', ['$scope',
  function($scope) {
    $scope.submit = function() {
      console.log(this.formData);
    }
  }
]);
