app.controller('QuestionController', ['$scope', '$routeParams', '$location', 'QuestionsFactory', 'AnswersFactory', function($scope, $routeParams, $location, QuestionsFactory, AnswersFactory) {
  function getQuestion(id) {
    QuestionsFactory.getQuestion(id, function(data) {
      $scope.question = data;
    })
  }
  getQuestion($routeParams.id);
  $scope.addQuestion = function(question) {
    QuestionsFactory.newQuestion(question);
  }
  $scope.increment = function(a_id, q_id) {
    AnswersFactory.incrementLike(a_id, q_id, function(res) {
      if (res.status == 200) {
        getQuestion(q_id);
        $location.url('#!/question/' + q_id);
      }
    })
  }
}])
