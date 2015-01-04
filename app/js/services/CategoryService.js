'use strict';

app.factory('CategoryService', ['$resource', 'mainUrl', function ($resource, mainUrl) {
    var categoryService = $resource(mainUrl + '/categories');

    return {
        getAll: function () {
            return categoryService.query();
        }
    }
}]);