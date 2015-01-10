app.factory('userData', ['$resource', 'mainUrl', 'authentication',  function ($resource, mainUrl, authentication) {
    function registerUser(user) {
        return $resource(mainUrl + 'user/register')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(data);
        });
    }
    function loginUser(user) {

    }

    function logoutUser() {

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);