app.factory('authentication',  function () {
    var key = 'user';
    function saveUserData(data) {
        //localStorageServiceProvider.set(key, data);
    }

    function getUserData(data) {
        localStorageServiceProvider.get(key);
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData
    }
});