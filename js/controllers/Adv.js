app.controller('Adv', function ($scope) {
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
        name: 'iPhone',
        pict: 'images/i-phone.png'
    }
    $scope.imgAdv = imgInfo;
});