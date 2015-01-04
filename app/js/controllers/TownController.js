'use strict';

app.controller('TownController', ['$scope', 'TownService',
    function ($scope, TownService) {
        $scope.towns = TownService.getAll();
    }]);