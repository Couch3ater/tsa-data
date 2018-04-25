addEventListener('message', function(e) {

  var csvData = e.data;

  /*
      the Airline object contains all the claims that belong to a particular airline
  */
  class Airline {
    constructor(name, claims){
      this.name = name;
      this.claims = [claims];
    }
  }

  var claims = [];

  /*
    - iterate through csv data
    - if output data structure doesn't contain airline, create new Airline obj, push claim data
    - if output data structure contains current airline, locate it, push claim data.
  */
  csvData.forEach(function(val){
    if(!(claims.some(function(element){ return element.name == val["Airline Name"].trim() }))){
      claims.push(new Airline(val["Airline Name"].trim(), val));
    }else{
      claims[claims.findIndex(item => item.name === val["Airline Name"].trim())].claims.push(val);
    }
  });
  
  //return message to main
  postMessage(claims);
}, false);