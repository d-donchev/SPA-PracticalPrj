app.controller('Adv', function ($scope, $http) {
    $scope.name = 'Ads - Home';

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
    
    $http.get("http://www.w3schools.com/website/Customers_JSON.php") 
    .success(function (resp) {
        $scope.ngCities = resp;
    });

});

app.controller('AdvAdmin', function ($scope, $http) {
    $scope.name = 'Adv - Admin';
});