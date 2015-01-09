app.factory('userData', ['$resource', function ($resource) {
    function registerUser(user) {

    }
    function loginUser(user) {

    }

    function logoutUser(user) {

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);