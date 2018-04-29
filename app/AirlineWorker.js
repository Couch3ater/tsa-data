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
    constructor(month, value, sum){
      this.month = month;
      this.value = [value];
      this.sum = sum;
    }

    updateSum(val){
      this.sum += val;
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
      if output data structure doesn't contain month, create new MonthlyClaim obj, push value
      if output data structure contains current month, locate it, push value
  */
  airlineClaims.forEach(function(airline){
    airline.claims.forEach(function(claim){
      year = claim["Date Received"].split("-")[2];
      month = claim["Date Received"].split("-")[1];
      claimAmnt = Number(claim["Close Amount"].replace(/[^0-9\.-]+/g,""))
      switch(year){
        case "10" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            if(!(airline.yr2010.some(function(element){ return element.month === month }))){
              airline.yr2010.push(new MonthlyClaim(month, claimAmnt, claimAmnt));
            }else{
              airline.yr2010[airline.yr2010.findIndex(item => item.month === month)].value.push(claimAmnt);
              airline.yr2010[airline.yr2010.findIndex(item => item.month === month)].updateSum(claimAmnt);
            }
          }
          break;
        case "11" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            if(!(airline.yr2011.some(function(element){ return element.month === month }))){
              airline.yr2011.push(new MonthlyClaim(month, claimAmnt, claimAmnt));
            }else{
              airline.yr2011[airline.yr2011.findIndex(item => item.month === month)].value.push(claimAmnt);
              airline.yr2011[airline.yr2011.findIndex(item => item.month === month)].updateSum(claimAmnt);
            }
          }
          break;
        case "12" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            if(!(airline.yr2012.some(function(element){ return element.month === month }))){
              airline.yr2012.push(new MonthlyClaim(month, claimAmnt, claimAmnt));
            }else{
              airline.yr2012[airline.yr2012.findIndex(item => item.month === month)].value.push(claimAmnt);
              airline.yr2012[airline.yr2012.findIndex(item => item.month === month)].updateSum(claimAmnt);
            }
          }
          break;
        case "13" :
          if(claimAmnt != 0 && !(isNaN(claimAmnt))){
            if(!(airline.yr2013.some(function(element){ return element.month === month }))){
              airline.yr2013.push(new MonthlyClaim(month, claimAmnt, claimAmnt));
            }else{
              airline.yr2013[airline.yr2013.findIndex(item => item.month === month)].value.push(claimAmnt);
              airline.yr2013[airline.yr2013.findIndex(item => item.month === month)].updateSum(claimAmnt);
            }
          }
          break;
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