app.factory('AnswersFactory', ['$location', '$http', function($location, $http) {
  var factory = {};
  factory.newAnswer = function(q_id, answer) {
    $http({
      url: '/answers/' + q_id,
      method: 'POST',
      data: answer
    }).then(function(res) {
      $location.url('/dashboard');
    }, function(res) {
      console.log(res);
    })
  }
  factory.incrementLike = function(a_id, q_id, callback) {
    $http({
      url: '/answers/' + a_id,
      method: 'PUT'
    }).then(function(res) {
      callback(res);
    }, function(res) {
      console.log(res);
    })
  }
  return factory;
}])
