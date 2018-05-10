'use strict';

angular.module("lineView", [
  'chart.js',
])

.controller("lineCtrl", function ($scope) {
  $scope.airline;
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
          position: 'left'
        }
      ]
    }
  };

  $scope.airlineChanged = function(airline){
    $scope.airline = airline;
    $scope.lineChartData = [airlineData[airlineData.findIndex(item => item.name === airline)]];
    switch($scope.$parent.yrSelect){
      case "10" :
        $scope.data.length = 0;
        angular.forEach($scope.lineChartData, function(yr){
          angular.forEach(yr.yr2010, function(month){
            $scope.data.push(month.sum);
          });
        });
        break;
      case "11" :
        $scope.data.length = 0;
        angular.forEach($scope.lineChartData, function(yr){
          angular.forEach(yr.yr2011, function(month){
            $scope.data.push(month.sum);
          });
        });
        break;
      case "12" :
        $scope.data.length = 0;
        angular.forEach($scope.lineChartData, function(yr){
          angular.forEach(yr.yr2012, function(month){
            $scope.data.push(month.sum);
          });
        });
        break;
      case "13" :
        $scope.data.length = 0;
        angular.forEach($scope.lineChartData, function(yr){
          angular.forEach(yr.yr2013, function(month){
            $scope.data.push(month.sum);
          });
        });
        break;
    }
  }

  $scope.airline.update = function(){
    $scope.airlineChanged($scope.airline);
  }
});