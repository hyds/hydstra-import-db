//var config = require('../config');
//var webservices = config.services;
var uris = require('./uris')();
var matchParams = require('./matchParams')();

 
    // for (var x = 0; x < uris.length; x++){
    //     console.log('uris qury: [',x,'] ',uris[x].query.params.table_name);
    // }


module.exports = function (){
	var queries = [];
	
	//console.log('uris: ',uris);

		for (var i = 0; i < uris.length; i++) {
			for (var h = 0; h < matchParams.length; h++) {
			
				
				var query = {};
				var urlQuery = {};
				var orgcode = uris[i].orgcode;

				console.log('uris qury: [',i,'] ',uris[i].query.params.table_name);

				urlQuery.host = uris[i].host;
				urlQuery.path = uris[i].path;
				query = uris[i].query;

				var params = {};
				params = query.params;
				params.sitelist_filter = matchParams[h];
				query.params = params;
				urlQuery.query = query;
				//console.log('urlQuery: ', urlQuery);
				//console.log('params', query.params);
				console.log('sitelist_filter: ', matchParams[h])
				queries.push(urlQuery);
				
			    console.log('console loop: [',queries.length-1,'] ',queries[queries.length-1]);
			    console.log('console loop: [',queries.length-3,'] ',queries[queries.length-3]);
				// for (var x = 0; x < queries.length; x++){
			 //    }

				//urlQuery['sitelist_filter'] = matchParams[h];
			}
	}


	// 	var one = filterParams[i];
	// 	for (var y = 0; y < filterParams.length; y++) {
	// 		var sitelist_filter = 'match('+ one + filterParams[y] + '*)'; 
	// 		filters.push(sitelist_filter);
			
	// 		// for (var z = 0; z < uris.length; z++) {
	// 		// 	var uri = uris[z];
	// 		// 	var ur = {};
	// 		// 	ur['host'] = uri.host;
	// 		// 	ur['path'] = uri.path;
	// 		// 	var query = uri.query; 
	// 		// 	//query.params['sitelist_filter'] = sitelist_filter;
	// 		// 	ur['query'] = query;  
	// 		// 	//var params = query.params; 
	// 		// 	//filters.push(uri);
	// 		// 	//filters.push(sitelist_filter);
				
	// 		// 	//filters.push(filter);
	// 		// 	filters.push(ur);
	// 		// }
	// 	}
	// }

	// for (var x = 0; x < queries.length; x++){
 //        //console.log('uris qury: [',x,'] ',queries[x]);
 //    }

	return queries;
	//return tableQueries;
}



