'use strict';
var app = angular.module('adv', ['ngResource', 'ngRoute', 'LocalStorageModule'])
    .constant('mainUrl', 'http://softuni-ads.azurewebsites.net/api')
    .constant('pageSize', 10);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/', {
        templateUrl: '/templates/login.html',
        controller: 'LoginController'
    });
    $routeProvider.when('/', {
        templateUrl: '/templates/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
    localStorageServiceProvider.setStorageType = 'localStorage';
    localStorageServiceProvider.setPrefix = 'Adv';
}]);