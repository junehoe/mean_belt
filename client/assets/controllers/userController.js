app.controller('UserController', ['$scope', '$routeParams', 'UsersFactory', function($scope, $routeParams, UsersFactory) {
  function getUser(id) {
    UsersFactory.getUser(id, function(data) {
      $scope.user = data;
    })
  }
  getUser($routeParams.id);
}])
