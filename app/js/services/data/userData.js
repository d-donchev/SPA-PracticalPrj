app.factory('userData', ['$resource', 'mainUrl', 'authentication', function ($resource, mainUrl, authentication) {
    function registerUser(user) {
        return $resource(mainUrl + 'user/register')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(data);
            });
    }
    function loginUser(user) {
        return $resource(mainUrl + 'user/login')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(data);
            });
    }

    function logoutUser() {
        return $resource(mainUrl + 'user/logout')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.removeUser();
            });
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser

    }
}]);