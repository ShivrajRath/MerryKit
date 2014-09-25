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

      // Add category name to the form. This will be persisted to product db
      this.formData['categoryname'] = $scope.categoryName;

      var params = {
        formData: self.formData,
        productType: productType
      };

      // Post the product data to the service.
      productUploadService.save(params).$promise.then(function(data) {
        $scope.modalMessage = 'Product added successfully !!';
        $('#msgModal').modal('show');
      }, function(err) {
        $scope.modalMessage = 'Error in data provided. Please try again !!';
        $('#msgModal').modal('show');
      });
    }
  }
]);
