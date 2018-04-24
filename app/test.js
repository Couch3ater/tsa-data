addEventListener('message', function(e) {
  //storage for claims data
  var claims = e.data;
  //var linePlotData = new Map();
  var linePlotData = [];

  //below code will loop through the properties (keys) of the first claim
  /*for (property in claims[0]){
  	linePlotData += property;
  }*/

  //the below code converts the papaparse object to a Map
  /*Object.keys(claims).forEach(key => {
  	linePlotData.set(key, claims[key]);
  });*/

  //return message to main
  postMessage(linePlotData);
}, false);