var uris = require('./uris')();
var matchParams = require('./matchParams')();

module.exports = function (){
	var queries = [];
	var test = [];
	
	for (var i = 0; i < uris.length; i++) {
		//console.log('uris qury: i [',i,'] ',uris[i].query.params.table_name);

		for (var h = 0; h < matchParams.length; h++) {
			var query = {};
			var urlQuery = {};
			var params = {};
			
			urlQuery.host = uris[i].host;
			urlQuery.path = uris[i].path;
			urlQuery.orgcode = uris[i].orgcode;
			
			params['sitelist_filter'] = matchParams[h]; 
			params['table_name'] = uris[i].query.params.table_name;
			params['return_type'] = uris[i].query.params.return_type;
			
			query['params'] = params;
			query['function'] = uris[i]['query']['function'];
			query['version'] = uris[i]['query']['version'];
			
			urlQuery.query = query;
			
			queries.push(urlQuery);
		}
	}
	return queries;
}



