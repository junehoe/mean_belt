app.controller('AnswerController', ['$scope', '$routeParams', 'AnswersFactory', 'UsersFactory', 'QuestionsFactory', function($scope, $routeParams, AnswersFactory, UsersFactory, QuestionsFactory) {
  function currentUser() {
    UsersFactory.currentUser(function(data) {
      $scope.user = data;
    })
  }
  function getQuestion(id) {
    QuestionsFactory.getQuestion(id, function(data) {
      $scope.question = data;
    })
  }
  getQuestion($routeParams.id);
  currentUser();
  $scope.addAnswer = function(answer) {
    answer['_responder'] = $scope.user._id;
    AnswersFactory.newAnswer($routeParams.id, answer);
  }
}])
