app.directive('leftPublicSidebar', function(){
    return{
        controller: 'HomeCtrl',
        restrict: 'E',
        templateUrl: 'app/templates/public/left-sidebar.html',
        replace: true
    };
});
