'use strict';

app.controller('LoginController', 'userData', ['$scope', function ($scope, userData) {
    $scope.login = function (user) {
        userData.login(user);
    }
}]);