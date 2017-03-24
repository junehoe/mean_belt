app.factory('QuestionsFactory', ['$location', '$http', function($location, $http) {
  var factory = {};
  factory.getQuestions = function(callback) {
    $http({
      url: '/questions',
      method: 'GET'
    }).then(function(res) {
      callback(res.data);
    })
  }
  factory.getQuestion = function(id, callback) {
    $http({
      url: '/questions/' + id,
      method: 'GET'
    }).then(function(res) {
      callback(res.data);
    }, function(res) {
      console.log(res);
    })
  }
  factory.newQuestion = function(question) {
    $http({
      url: '/questions',
      method: 'POST',
      data: question
    }).then(function(res) {
      $location.url('/dashboard');
    }, function(res) {
      console.log(res);
    })
  }
  return factory;
}])
