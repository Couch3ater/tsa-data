addEventListener('message', function(e) {
  var claims = e.data;
  var airlines = new Array();
  var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  var claimDate, claimAmount;

  //final storage
  var linePlotData = [];

  /*
    - iterate through data
    - if the airline on the current row has not yet been added to the outer-most data store, insert ["Airline Name"] property
    - determine which month the claim was received using ["Date Received"] property and the months Array
    - convert ["Close Amount"] to floating point
    - add ["Close Amount"] value to correct cell: [claim][month-array-index]

    ! checking for 0 value claims during iteration
  */
  for(claim in claims){
    claimAmount = Number(claims[claim]["Close Amount"].replace(/[^0-9\.-]+/g,""));
    if(claimAmount != 0 && !(isNaN(claimAmount))){
      claimDate = claims[claim]["Date Received"].split('-')[1];
      if(!(linePlotData.includes(claims[claim]["Airline Name"].trim()))){
        linePlotData.push(claims[claim]["Airline Name"].trim());
      }
    }
  }

  //return message to main
  postMessage(linePlotData);
}, false);