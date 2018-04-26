addEventListener('message', function(e) {

  var csvData = e.data;

  /*
      the Airport object contains all the claims that belong to a particular airport
  */
  class Airport {
    constructor(name, claims){
      this.name = name;
      this.claims = [claims];
    }
  }

  var airportClaims = [];

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
      set airports with "-" to name "Unknown";
      remove the last row from the data (<BR>);
  */
  airportClaims[airportClaims.findIndex(item => item.name === "-")].name = "Unknown";
  airportClaims.splice(-1, airportClaims.length-1);
  
  //return message to main
  postMessage(airportClaims);
}, false);