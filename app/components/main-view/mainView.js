'use strict';

angular.module('mainView', [
  'ngRoute',
  'lineView',
  'barView',
])

.controller('mainCtrl', function($scope){
  $scope.airlines = [];
  $scope.airports = [];
  $scope.yrSelect = '10';
  angular.element(document).ready(function() {
    var airlineSel = document.getElementById("airlineSelect");
    var airportSel = document.getElementById("airportSelect");

    $(document).ready(function(){
      $.ajax({
        type: "GET",
        url: "assets/data/claims-2010-2013_0.csv",
        dataType: "text",
        success: function(file){
          //when the file is loaded, pass it to papaparse
          Papa.parse(file, {
            header: true,
            complete: function(results) {
              parseData(results.data);
            }
          });
        }
      });

      //initialize workers to parse data
      var airlineWorker = new Worker('assets/js/AirlineWorker.js');
      var airportWorker = new Worker('assets/js/AirportWorker.js');

      //pass off data to worker threads
      function parseData(claims){
        airportWorker.postMessage(claims);
        airlineWorker.postMessage(claims);
      }

      //when worker threads return a message, DO STUFF THAT NEEDS TO BE DONE
      /*
          - populate dropdowns with airline names / airport codes
      */
      airlineWorker.addEventListener('message', function(e){
        airlineData = e.data;
        airlineData.forEach(function(airline){
          $scope.airlines.push(airline.name);
          /*
          option = document.createElement('option');
          option.value = option.text = airline.name;
          airlineSel.add(option);
          */
        });
        console.log("Airline data:\n");
        console.log(airlineData);
      }, false);
      airportWorker.addEventListener('message', function(e){
        airportData = e.data;
        airportData.forEach(function(airport){
        $scope.airports.push(airport.name);
          /*
          option = document.createElement('option');
          option.value = option.text = airport.name;
          airportSel.add(option);
          */
        });
        console.log("Airport data:\n");
        console.log(airportData);
      }, false);
    });
  });
});