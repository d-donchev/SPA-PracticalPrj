'use strict';

app.factory('AdvService', ['$resource', 'mainUrl', 'pageSize', function ($resource, mainUrl, pageSize) {
    var adsResource = $resource(mainUrl + '/ads', null, {
        'getAll': { method: 'GET', isArray: false }
    });

    return {
        getAll: function (requestParameters) {
            return adsResource.getAll(requestParameters).$promise;
        }
    }
}]);