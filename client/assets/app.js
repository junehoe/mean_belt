var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'IndexController'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController'
    })
    .when('/new_question', {
      templateUrl: 'partials/newQuestion.html',
      controller: 'QuestionController'
    })
    .when('/question/:id', {
      templateUrl: 'partials/question.html',
      controller: 'QuestionController'
    })
    .when('/question/:id/new_answer', {
      templateUrl: 'partials/answer.html',
      controller: 'AnswerController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
