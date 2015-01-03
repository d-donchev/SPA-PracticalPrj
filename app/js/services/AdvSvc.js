'use strict';

app.factory('AdvResource', ['$resource', 'mainUrl', function ($resource, mainUrl) {
    var adsResource = $resource(mainUrl + '/ads', null, {
        'getAll': { method: 'GET', isArray: false }
    });

    return {
        getAll: function () {
            return adsResource.getAll().$promise;
        }
    }
}]);