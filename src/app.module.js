var app = angular.module('app', [
    //vendor
    'ui.router',
    'ngResource',
    'ngStorage',
    'ngSanitize',
    'ngMaterial',
    'ngMessages',
    //app
    'app.users',
    'app.posts',
    'app.tasks',
    'app.auth'
]);

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider',
function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    //Routes
    $urlRouterProvider.otherwise('/');
    $stateProvider.
    state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'app.controller',
    });
}]);

app.run(['$state', '$rootScope', function ($state, $rootScope) {
    
}]);