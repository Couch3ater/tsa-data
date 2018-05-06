//variables you'll need
var airlineSel = document.getElementById("airlineSelect");
var airportSel = document.getElementById("airportSelect");
var tab10 = document.getElementById("yr2010");
var tab11 = document.getElementById("yr2011");
var tab12 = document.getElementById("yr2012");
var tab13 = document.getElementById("yr2013");
var yearSel = "10";
var lineChartData, barChartData;


//get the data you need from parseData.js



//event listeners for dropdowns
airlineSel.addEventListener("change", function(){
  lineChartData = airlineData[airlineData.findIndex(item => item.name === this.value)];
  switch(yearSel){
    case "10" :
      lineChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
        lineChartData.yr2010.forEach((month) => {
          dataset.data.push(month.sum);
        });
      });
      lineChart.update();
      break;
    case "11" :
      lineChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
        lineChartData.yr2011.forEach((month) => {
          dataset.data.push(month.sum);
        });
      });
      lineChart.update();
      break;
    case "12" :
      lineChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
        lineChartData.yr2012.forEach((month) => {
          dataset.data.push(month.sum);
        });
      });
      lineChart.update();
      break;
    case "13" :
      lineChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
        lineChartData.yr2013.forEach((month) => {
          dataset.data.push(month.sum);
        });
      });
      lineChart.update();
      break;
    default :
      break;
  }
});

airportSel.addEventListener("change", function(){
  barChartData = airportData[airportData.findIndex(item => item.name === this.value)];
  switch(yearSel){
    case "10" :
      barChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
        barChartData.yr2010.forEach((month) => {
          dataset.data.push(month.avg);
        });
      });
      barChart.update();
      break;
    case "11" :
      barChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
        barChartData.yr2011.forEach((month) => {
          dataset.data.push(month.avg);
        });
      });
      barChart.update();
      break;
    case "12" :
      barChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
        barChartData.yr2012.forEach((month) => {
          dataset.data.push(month.avg);
        });
      });
      barChart.update();
      break;
    case "13" :
      barChart.data.datasets.forEach((dataset) => {
        dataset.data.length = 0;
        barChartData.yr2013.forEach((month) => {
          dataset.data.push(month.avg);
        });
      });
      barChart.update();
      break;
    default :
      break;
  }
});





//event listeners for tab group
tab10.addEventListener("click", function(){
  alert(airlineData);
  yearSel = "10";
  if(!(this.classList.contains('active'))){
    this.classList.toggle('active');
    if(tab11.classList.contains('active')){ tab11.classList.toggle('active'); }
    if(tab12.classList.contains('active')){ tab12.classList.toggle('active'); }
    if(tab13.classList.contains('active')){ tab13.classList.toggle('active'); }

    //update data
    if(lineChartData != undefined){
      lineChartData = airlineData[airlineData.findIndex(item => item.name === airlineSel.value)];
      switch(yearSel){
        case "10" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2010.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "11" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2011.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "12" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2012.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "13" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2013.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        default :
          break;
      }
    }

    if(barChartData != undefined){
      barChartData = airportData[airportData.findIndex(item => item.name === airportSel.value)];
      switch(yearSel){
        case "10" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2010.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "11" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2011.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "12" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2012.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "13" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2013.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        default :
          break;
      }
    }
  }
});
tab11.addEventListener("click", function(){
  yearSel = "11";
  if(!(this.classList.contains('active'))){
    this.classList.toggle('active');
    if(tab10.classList.contains('active')){ tab10.classList.toggle('active'); }
    if(tab12.classList.contains('active')){ tab12.classList.toggle('active'); }
    if(tab13.classList.contains('active')){ tab13.classList.toggle('active'); }

    //update data
    if(lineChartData != undefined){
      lineChartData = airlineData[airlineData.findIndex(item => item.name === airlineSel.value)];
      switch(yearSel){
        case "10" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2010.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "11" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2011.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "12" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2012.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "13" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2013.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        default :
          break;
      }
    }

    if(barChartData != undefined){
      barChartData = airportData[airportData.findIndex(item => item.name === airportSel.value)];
      switch(yearSel){
        case "10" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2010.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "11" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2011.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "12" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2012.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "13" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2013.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        default :
          break;
      }
    }
  }
});
tab12.addEventListener("click", function(){
  yearSel = "12";
  if(!(this.classList.contains('active'))){
    this.classList.toggle('active');
    if(tab10.classList.contains('active')){ tab10.classList.toggle('active'); }
    if(tab11.classList.contains('active')){ tab11.classList.toggle('active'); }
    if(tab13.classList.contains('active')){ tab13.classList.toggle('active'); }

    //update data
    if(lineChartData != undefined){
      lineChartData = airlineData[airlineData.findIndex(item => item.name === airlineSel.value)];
      switch(yearSel){
        case "10" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2010.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "11" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2011.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "12" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2012.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "13" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2013.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        default :
          break;
      }
    }

    if(barChartData != undefined){
      barChartData = airportData[airportData.findIndex(item => item.name === airportSel.value)];
      switch(yearSel){
        case "10" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2010.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "11" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2011.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "12" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2012.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "13" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2013.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        default :
          break;
      }
    }
  }
});
tab13.addEventListener("click", function(){
  yearSel = "13";
  if(!(this.classList.contains('active'))){
    this.classList.toggle('active');
    if(tab10.classList.contains('active')){ tab10.classList.toggle('active'); }
    if(tab11.classList.contains('active')){ tab11.classList.toggle('active'); }
    if(tab12.classList.contains('active')){ tab12.classList.toggle('active'); }

    //update data
    if(lineChartData != undefined){
      lineChartData = airlineData[airlineData.findIndex(item => item.name === airlineSel.value)];
      switch(yearSel){
        case "10" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2010.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "11" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2011.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "12" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2012.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        case "13" :
          lineChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            lineChartData.yr2013.forEach((month) => {
              dataset.data.push(month.sum);
            });
          });
          lineChart.update();
          break;
        default :
          break;
      }
    }

    if(barChartData != undefined){
      barChartData = airportData[airportData.findIndex(item => item.name === airportSel.value)];
      switch(yearSel){
        case "10" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2010.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "11" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2011.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "12" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2012.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        case "13" :
          barChart.data.datasets.forEach((dataset) => {
            dataset.data.length = 0;
            barChartData.yr2013.forEach((month) => {
              dataset.data.push(month.avg);
            });
          });
          barChart.update();
          break;
        default :
          break;
      }
    }
  }
});