angular.module('PhonebookApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/contacts', {
        controller: 'ListController',
        templateUrl: 'views/list.html'
      });
    $locationProvider.html5Node(true);
  })