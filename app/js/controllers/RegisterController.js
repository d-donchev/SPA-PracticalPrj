'use strict';

app.controller('RegisterController', ['$scope', 'townsData', function ($scope) {
    townsData.getTowns()
    .$promise
    .then(function (data) {
        $scope.towns = data;
    });

    $scope.register = function (user) {
        console.log(user);
        //userData.register(user);
    }
}]);