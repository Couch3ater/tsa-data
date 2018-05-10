'use strict';

angular.module("barView", [
  'chart.js',
])

.controller("barCtrl", function ($scope) {
  $scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  $scope.data = [0,0,0,0,0,0,0,0,0,0,0,0];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left',
        }
      ]
    }
  };

  $scope.airportChanged = function(airport){
    $scope.barChartData = [airportData[airportData.findIndex(item => item.name === airport)]];
    switch($scope.$parent.yrSelect){
      case "10" :
        $scope.data.length = 0;
        angular.forEach($scope.barChartData, function(yr){
          angular.forEach(yr.yr2010, function(month){
            $scope.data.push(month.sum);
          });
        });
        break;
      case "11" :
        $scope.data.length = 0;
        angular.forEach($scope.barChartData, function(yr){
          angular.forEach(yr.yr2011, function(month){
            $scope.data.push(month.sum);
          });
        });
        break;
      case "12" :
        $scope.data.length = 0;
        angular.forEach($scope.barChartData, function(yr){
          angular.forEach(yr.yr2012, function(month){
            $scope.data.push(month.sum);
          });
        });
        break;
      case "13" :
        $scope.data.length = 0;
        angular.forEach($scope.barChartData, function(yr){
          angular.forEach(yr.yr2013, function(month){
            $scope.data.push(month.sum);
          });
        });
        break;
    }
  }
});