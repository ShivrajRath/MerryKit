/***********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Product Form Controller. 
***********************************************************/

addProductApp.controller('productFormCtrl', ['$scope', '$routeParams', 'ProductUploadService',
  function($scope, $routeParams, ProductUploadService) {

    $scope.categoryName = $routeParams.categoryName;

    $scope.submit = function(productType) {

      var self = this;

      if(!this.formData){
        this.formData = [];
      }

      // Add category name to the form. This will be persisted to product db
      this.formData['categoryname'] = $scope.categoryName;

      var params = {
        formData: self.formData,
        product_type: productType
      };

      var product = new ProductUploadService();
      product.formData = self.formData;
      product.productType = productType;

      product.$save({}, function(data){
        console.log(data);
      });
    }
  }
]);
