addEventListener('message', function(e) {

  var csvData = e.data;

  /*
      the Airline object contains all the claims that belong to a particular airline
  */
  class Airline {
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
    constructor(){

    }
  }

  var airlineClaims = [];
  var year, month, claimAmnt, claimDate;

  /*
    iterate through csv data;
    if output data structure doesn't contain airline, create new Airline obj, push claim data;
    if output data structure contains current airline, locate it, push claim data;
  */
  csvData.forEach(function(val){
    if(!(airlineClaims.some(function(element){ return element.name === val["Airline Name"].trim() }))){
      airlineClaims.push(new Airline(val["Airline Name"].trim(), val));
    }else{
      airlineClaims[airlineClaims.findIndex(item => item.name === val["Airline Name"].trim())].claims.push(val);
    }
  });

  /*  
      !! creating workers for this would increase efficiency

      iterate through airlineClaims;
      iterate through each airline's claim data;
      determine year;
      determine month;
      create MonthlyClaim object per month;
  */
  airlineClaims.forEach(function(airline){
    airline.claims.forEach(function(claim){
      year = claim["Date Received"].split("-")[2];
      claimAmnt = Number(claim["Close Amount"].replace(/[^0-9\.-]+/g,""))
      switch(year){
        case "10" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            airline.yr2010.push(claimAmnt);
            break;
          }
        case "11" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            airline.yr2011.push(claimAmnt);
            break;
          }
        case "12" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            airline.yr2012.push(claimAmnt);
            break;
          }
        case "13" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            airline.yr2013.push(claimAmnt);
            break;
          }
        default :
          break;
      }
    });
  });



  /*
      set airlines with "-" to name "Unknown";
      remove the last row from the data (<BR>);
  */
  airlineClaims[airlineClaims.findIndex(item => item.name === "-")].name = "Unknown";
  airlineClaims.splice(-1, airlineClaims.length-1);
  
  //return message to main
  postMessage(airlineClaims);
}, false);