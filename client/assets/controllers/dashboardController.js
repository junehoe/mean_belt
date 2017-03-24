app.controller('DashboardController', ['$scope', '$routeParams', '$location', 'UsersFactory', 'QuestionsFactory', function($scope, $routeParams, $location, UsersFactory, QuestionsFactory) {
  function currentUser() {
    UsersFactory.currentUser(function(data) {
      $scope.user = data;
    })
  }
  currentUser();
  function getQuestions() {
    QuestionsFactory.getQuestions(function(data) {
      $scope.questions = data;
    })
  }
  getQuestions();
}]);
