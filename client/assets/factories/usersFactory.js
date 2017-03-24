app.factory('UsersFactory', ['$location', '$http', function($location, $http) {
  var factory = {};
  factory.newUser = function(user) {
    $http({
      url: '/users',
      method: 'POST',
      data: user
    }).then(function(res) {
      $location.url('/dashboard');
    }, function(res) {
      console.log(res);
    })
  }
  factory.currentUser = function(callback) {
    $http({
      url: '/current',
      method: 'GET'
    }).then(function(res) {
      callback(res.data);
    }, function(res) {
      $location.url('/');
      console.log(res);
    })
  }
  return factory;
}])
