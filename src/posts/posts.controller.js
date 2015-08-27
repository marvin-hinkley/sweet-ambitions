angular.module('app.posts').controller('posts.controller', ['$scope', 'requestedPost', '$state', function ($scope, requestedPost, $state) {
    var pageTitle = requestedPost.name;
    $scope.$emit('set-page-title', { title: pageTitle });
    $scope.post = requestedPost;
    $scope.editUserPost = function (id) {
        var targetState = $state.current.name + '.edit';
        if ($state.current.name.indexOf('.') !== -1) {
            targetState = $state.current.name.split('.')[0] + '.edit';
        }
        $state.go(targetState, { id: id });
    };
}]);