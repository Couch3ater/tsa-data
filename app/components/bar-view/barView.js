'use strict';

angular.module("barView", [
  'chart.js',
])

.controller("barCtrl", function ($scope) {

  $scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27]
  ];
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
    console.log($scope.barChartData);
  }
});