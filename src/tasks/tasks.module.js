angular.module('app.tasks', [])
.config(
    ['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider.
        state('profile', {
            url: '/profile',
            templateUrl: 'views/user.html',
            controller: 'profileController',
            data: { authentication: true,  authorization: [] },
            resolve: {
                requestedUser:
                ['$q', '$http', '$stateParams', '$sessionStorage', '$rootScope', 'User',
                 function ($q, $http, $stateParams, $sessionStorage, $rootScope, User) {
                    var storedUser = new User($sessionStorage.user);
                    var itemTitle = (storedUser.isCompany) ? storedUser.fields.Name : storedUser.fields.FirstName + ' ' + storedUser.fields.LastName;
                    $rootScope.$broadcast('set-item-title', { title: itemTitle });
                    return storedUser;
                }]
            }
        }).
        state('editProfile', {
            url: '/edit',
            templateUrl: 'views/editUser.html',
            controller: 'editProfileController',
            data: { authentication: true, authorization: [] },
            resolve: {
                isNewUser: function () {
                    return false;
                },
                requestedUser:
                ['$q', '$http', '$stateParams', '$sessionStorage', '$rootScope', 'User',
                 function ($q, $http, $stateParams, $sessionStorage, $rootScope, User) {
                    var storedUser = new User($sessionStorage.user);
                    var itemTitle = (storedUser.isCompany) ? storedUser.fields.Name : storedUser.fields.FirstName + ' ' + storedUser.fields.LastName;
                    $rootScope.$broadcast('set-item-title', { title: itemTitle });
                    return storedUser;
                }]
            }
        });
}]);