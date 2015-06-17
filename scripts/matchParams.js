var filterParams = "0123456789abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

module.exports = function (){
	var siteListFilters = [];
  for (var i = 0; i < filterParams.length; i++) {
    var one = filterParams[i];
    for (var y = 0; y < filterParams.length; y++) {
      var filter = 'match('+ one + filterParams[y] + '*)'; 
      siteListFilters.push(filter);
    }
  }
  return siteListFilters;  
}