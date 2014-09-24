/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Product Form Controller. 
***********************************************************/

addProductApp.controller('productFormCtrl', ['$scope', '$routeParams', 'productUploadService',
  function($scope, $routeParams, productUploadService) {

    $scope.categoryName = $routeParams.categoryName;

    $scope.submit = function(productType) {

      var self = this;

      this.formData['categoryname'] = $scope.categoryName;
      console.log(this.formData);

      productUploadService.save({
        formData: self.formData,
        productType: productType
      }, function(resData) {
        console.log(resData)
      })

    }
  }
]);
