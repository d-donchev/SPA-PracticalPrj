'use strict';

app.factory('TownService', ['$resource', 'mainUrl', function ($resource, mainUrl) {
    var townService = $resource(mainUrl + '/towns');

    return {
        getAll: function () {
            return townService.query();
        }
    }
}]);