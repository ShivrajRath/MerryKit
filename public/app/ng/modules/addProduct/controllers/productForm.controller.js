/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Product Form Controller. 
***********************************************************/

addProductApp.controller('productFormCtrl', ['$scope', '$routeParams', 'productUploadService',
  function($scope, $routeParams, productUploadService) {

    $scope.categoryName = $routeParams.categoryName;

    $scope.submit = function() {

      this.formData['categoryname'] = $scope.categoryName;

      // productUploadService.post({
      //   this.formData
      // }, function(data, err) {
      //   console.log(data);
      // });

      console.log(this.formData);
    }
  }
]);
