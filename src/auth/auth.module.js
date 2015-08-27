angular.module('app.auth', [])
    .config(
    ['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider',
     function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
         $locationProvider.html5Mode(true);
         $urlRouterProvider.otherwise('/');


     }]);