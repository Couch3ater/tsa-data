addEventListener('message', function(e) {
  //storage for claims data
  var claims = e.data;
  //var linePlotData = new Map();
  var linePlotData = new Array(claims.length);

  //the below code converts the papaparse object to a Map
  /*Object.keys(claims).forEach(key => {
  	linePlotData.set(key, claims[key]);
  });*/

  //return message to main
  postMessage(linePlotData);
}, false);