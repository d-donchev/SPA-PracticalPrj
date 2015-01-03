'use strict';
app.controller('AdvController', function ($scope, $http) {
    $scope.name = 'Ads - Home';

    var navigations = [
    {
        navName: 'Home',
        NavId: 'H'
    },
    {
        navName: 'My Ads',
        NavId: 'My'
    },
    {
        navName: 'Publish New Ad',
        NavId: 'New'
    },
    {
        navName: 'Edit Profile',
        NavId: 'Edit'
    }
    ];

    $scope.ngNavigation = navigations;


    var categories = [
        {
            catName: 'All',
            catFilter: '*'
        },
        {
            catName: 'Cars',
            catFilter: 'C'
        },
        {
            catName: 'Properties',
            catFilter: 'P'
        },
        {
            catName: 'Electronics',
            catFilter: 'E'
        },
        {
            catName: 'Jobs',
            catFilter: 'J'
        }
    ];

    $scope.ngCategories = categories;

    var imgInfo = {
        imgLabel: 'iPhone',
        pict: 'images/i-phone.png'
    }
    $scope.imgAdv = imgInfo;

    $scope.classTempClass = 'dummyClass';

    $http.get("http://softuni-ads.azurewebsites.net/api/ads?townid=10&categoryid=8")
            .success(function (resp1) {
        $scope.ngCities = resp1;
    });

    $http.get("http://softuni-ads.azurewebsites.net/api/ads")
        .success(function (resp) {
        $scope.ads = resp;
    });

});

app.controller('AdvAdmin', function ($scope, $http) {
    $scope.name = 'Adv - Admin';
});