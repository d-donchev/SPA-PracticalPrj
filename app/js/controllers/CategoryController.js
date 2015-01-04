'use strict';

app.controller('CategoryController', ['$scope', 'CategoryService',
    function ($scope, CategoryService) {
        $scope.category = CategoryService.getAll();
    }]);