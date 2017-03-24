app.controller('IndexController', ['$scope', '$routeParams', 'UsersFactory', function($scope, $routeParams, UsersFactory) {
  $scope.addUser = function(user) {
    UsersFactory.newUser(user);
  }
}]);
