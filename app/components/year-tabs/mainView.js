'use strict';

angular.module('tsaData.tabView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'components/year-tabs/tabView.html',
    controller: 'tabCtrl'
  });
}])

.controller('tabCtrl', [function() {

}]);