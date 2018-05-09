'use strict';

var tsaData = angular.module('tsaData', [
  'ngRoute',
  'barView',
  'mainView',
  'lineView',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/',{
      templateUrl:'/components/main-view/mainView.html',
      controller: 'mainCtrl'
    });
  $routeProvider.otherwise({redirectTo: '/'});
}]);