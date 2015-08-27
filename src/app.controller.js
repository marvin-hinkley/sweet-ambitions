angular.module('app').controller('app.controller', ['$scope', '$sessionStorage', 'authService', function ($scope, $sessionStorage, authService) {
    $scope.user = $sessionStorage.user;

    $scope.sidebar = {
        content: 'sidebar.default',
        enabled: true,
        isOpen: true,
        isLockedOpen: true
    };
    $scope.pageToolbar = {
        title: '',
        controls: {}
    };
    $scope.userButtonOpen = false;
    $scope.$emit('populate-sidebar', {
        content: [],
        nameProperties: [],
        enabled: false
    });
    $scope.$on('set-page-title', function (event, args) {
        $scope.pageToolbar.title = args.title;
    });
    $scope.$on('set-page-controls', function (event, args) {
        $scope.pageToolbar.title = args.controls;
    });
    $scope.openPanel = function() {
        panels.open('left-panel');
    };
    $scope.logout = function() {
        authService.logout();
    };
}]);