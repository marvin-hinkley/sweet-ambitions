angular.module('app.users').controller('users.controller', ['$scope', 'requestedUser', '$state', function ($scope, requestedUser, $state) {
    $scope.$emit('set-page-title', { title: requestedUser.firstName + requestedUser.lastName });
    $scope.user = requestedUser;
    $scope.editUser = function (id) {
        var targetState = $state.current.name + '.edit';
        if ($state.current.name.indexOf('.') !== -1) {
            targetState = $state.current.name.split('.')[0] + '.edit';
        }
        $state.go(targetState, { id: id });
    };
}]);