angular.module('app.users').factory('userService', ['$q', '$http', '$sessionStorage', 'User', function ($q, $http, $sessionStorage, User) {
    return {
        getUserByID: function (id) {
            return $http.get('' + id, {
                
            });
        },
        getUserByUsername: function (username) {
            var defer = $q.defer();
            $http.get('' + username)
            .success(function(data) {
                defer.resolve(new User(data));
            })
            .error(function(err) {
                defer.reject();
            });
            return defer.promise;
        }
    };
}]);