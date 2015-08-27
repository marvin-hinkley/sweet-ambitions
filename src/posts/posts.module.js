angular.module('app.posts', [])
.config(
    ['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        
        
}]);