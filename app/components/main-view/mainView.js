'use strict';

angular.module('tsaData.mainView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'components/main-view/mainView.html',
    controller: 'mainCtrl'
  });
}])

.controller('mainCtrl', [function() {

}]);