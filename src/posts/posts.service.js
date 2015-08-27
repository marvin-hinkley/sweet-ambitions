angular.module('app.posts').factory('postService', ['$q', '$http', 'Post', function ($q, $http, Post) {
    return {
        getPostByID: function (id) {
            return $http.get('https://' + id, {
                
            });
        }
    };
}]);