addEventListener('message', function(e) {

  var csvData = e.data;

  /*
      the Airport object contains all the claims that belong to a particular airport
  */
  class Airport {
    constructor(name, claims, yr2010, yr2011, yr2012, yr2013){
      this.name = name;
      this.claims = [claims];
      this.yr2010 = [];
      this.yr2011 = [];
      this.yr2012 = [];
      this.yr2013 = [];
    }
  }
  class MonthlyClaim {
    constructor(month, value, avg){
      this.month = month;
      this.value = [value];
      this.avg = avg;
    }
  }

  var airportClaims = [];
  var year, month, claimAmnt, claimDate;

  /*
    iterate through csv data;
    if output data structure doesn't contain airport, create new Airport obj, push claim data;
    if output data structure contains current airport, locate it, push claim data;
  */
  csvData.forEach(function(val){
    if(!(airportClaims.some(function(element){ return element.name === val["Airport Code"].trim() }))){
      airportClaims.push(new Airport(val["Airport Code"].trim(), val));
    }else{
      airportClaims[airportClaims.findIndex(item => item.name === val["Airport Code"].trim())].claims.push(val);
    }
  });

  /*  
      !! creating workers for this would increase efficiency

      iterate through airportClaims;
      iterate through each airport's claim data;
      determine year;
      determine month;
      if output data structure doesn't contain month, create new MonthlyClaim obj, push value
      if output data structure contains current month, locate it, push value
  */
  airportClaims.forEach(function(airport){
    airport.claims.forEach(function(claim){
      year = claim["Date Received"].split("-")[2];
      month = claim["Date Received"].split("-")[1];
      claimAmnt = Number(claim["Close Amount"].replace(/[^0-9\.-]+/g,""))
      switch(year){
        case "10" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            if(!(airport.yr2010.some(function(element){ return element.month === month }))){
              airport.yr2010.push(new MonthlyClaim(month, claimAmnt));
            }else{
              airport.yr2010[airport.yr2010.findIndex(item => item.month === month)].value.push(claimAmnt);
            }
          }
          break;
        case "11" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            if(!(airport.yr2011.some(function(element){ return element.month === month }))){
              airport.yr2011.push(new MonthlyClaim(month, claimAmnt));
            }else{
              airport.yr2011[airport.yr2011.findIndex(item => item.month === month)].value.push(claimAmnt);
            }
          }
          break;
        case "12" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            if(!(airport.yr2012.some(function(element){ return element.month === month }))){
              airport.yr2012.push(new MonthlyClaim(month, claimAmnt));
            }else{
              airport.yr2012[airport.yr2012.findIndex(item => item.month === month)].value.push(claimAmnt);
            }
          }
          break;
        case "13" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            if(!(airport.yr2013.some(function(element){ return element.month === month }))){
              airport.yr2013.push(new MonthlyClaim(month, claimAmnt));
            }else{
              airport.yr2013[airport.yr2013.findIndex(item => item.month === month)].value.push(claimAmnt);
            }
          }
          break;
        default :
          break;
      }
    });
  });



  /*
      set airports with "-" to name "Unknown";
      remove the last row from the data (<BR>);
  */
  airportClaims[airportClaims.findIndex(item => item.name === "-")].name = "Unknown";
  airportClaims.splice(-1, airportClaims.length-1);
  
  //return message to main
  postMessage(airportClaims);
}, false);