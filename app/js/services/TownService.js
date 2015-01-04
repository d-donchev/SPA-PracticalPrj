'use strict';

app.factory('townService', ['$resource', 'mainUrl',  function ($resource, mainUrl) {
    var adsResource = $resource(mainUrl + '/towns', null, {
        'getAll': { method: 'GET', isArray: false }
    });

    return {
        getAll: function () {
             return adsResource.getAll().$promise;
        }
    }
}]);