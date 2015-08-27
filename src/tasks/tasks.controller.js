angular.module('app.tasks').controller('tasks.controller', ['$scope', 'requestedTask', '$state', function ($scope, requestedTask, $state) {
    $scope.$emit('set-page-title', { title: requestedTask.name });
    $scope.task = requestedTask;
    $scope.editTask = function (id) {
        var targetState = $state.current.name + '.edit';
        if ($state.current.name.indexOf('.') !== -1) {
            targetState = $state.current.name.split('.')[0] + '.edit';
        }
        $state.go(targetState, { id: id });
    };
}]);