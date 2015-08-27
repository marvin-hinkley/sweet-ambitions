angular.module('app.tasks').factory('taskService', ['$q', '$http', '$sessionStorage', 'Task', function ($q, $http, $sessionStorage, Task) {
    return {
        getUserByID: function (id) {
            return $http.get('' + id, {
                
            });
        }
    };
}]);