var tableServices = require('./tableServices')();
var tableQuery = require('../queries').table;

//console.log('tableService: ', tableServices)

module.exports = function (){
    var uris = [];
    for (var i = 0; i < tableServices.length ; i++) {
        var query = {};
        var url = {};
        
        query = tableQuery;
        query.params.table_name = tableServices[i].table;

        url['orgcode'] = tableServices[i].orgcode;
        url['host'] = tableServices[i].host;
        url['path'] = tableServices[i].path; 
        url['query'] = JSON.parse(JSON.stringify(query)); 
        //console.log('url: ',url);
        //serviceTable['table'] = table;     
        // tableService.table;

        // var webservice = webservices[i];
        // var tables = webservice.tables;
        // var query = tableQuery;
        

        // //webservice['query'] = query;
        // //console.log('tableQuery: ', query, ', params: ', par);
        // //var months = monthIncrement;
        // //var c = 0;
        // //loopTables(webservice, c);
        
        // //var parm = {};
        // getParams(webservice,query,tables,function(dat){
        //     console.log('  dat',dat);
        //     uris.push(JSON.parse(dat));
        // })
        //console.log('url',url);
        uris.push(url);
    };
    
    // for (var x = 0; x < uris.length; x++){
    //     console.log('qury: [',x,'] ',uris[x].query);
    // }
    //logUR(uris);
    
    return uris;
}


function getParams(webservice, query,tables, cb){
    var t = {};
    var ret = [];
    t = query['params'];
    for (var y = 0; y < tables.length ; y++){
        var tab = tables[y];
        t['table_name'] = tab;
        console.log('  y: '+y+', tab: ',tab,', par ', t);
        ret.push(JSON.stringify(t));
    }

    cb(ret);
}




//         for (var y = 0; y < tables.length ; y++){
//             var tab = tables[y];
//             console.log('  y: '+y+', tab: ',tab,', par ', JSON.stringify(par));
//             par['table_name'] = tab;
//             //parm['params']['table_name'] = tab; 
//             //console.log('    par ', parm.params);
            
//             //var parm = query.params;
//     //query.params.table_name = table;
//             //parm['table_name'] = tab;
           
//         //query['params'] = params;
// // //  {
// //     "params": {
// //       "return_type": "hash",
// //       "table_name": "results",
// //       "sitelist_filter": ""
// //     },
// //     "table_name": "site",
// //     "query": {
// //       "function": "get_db_info",
// //       "version": "3",
// //       "params": {
// //         "return_type": "hash",
// //         "table_name": "results",
// //         "sitelist_filter": ""
// //       }
// //     },
// //     "host": "watermonitoring.dnrm.qld.gov.au",
// //     "path": "/cgi/webservice.server.pl?"
// //   },

//             //params = query.params;
//             var ur = {};
//             //uri['params']['table_name'] = parm.table_name;
//             //ur['table_name'] = parm.table_name;
//             //console.log('table: ',tab,', parm: ', parm );
//             //uri.parm = parm;
//             //uri.parm.table_name = table;
//             //ur['query'] = query;
//             //uri['query']['params']['table_name'] = table;
//             ur['query'] = query;
//             ur['par'] = parm;
//             ur['host'] = webservice.options.host;
//             ur['path'] = webservice.options.path; 
//             //webservice.tables;
//             //uris.push(uri);  
//             uris.push(ur);  
//         } 
        






// function setTables(tables){



// }

// var query = webservice.query;
//     query.params.table_name = table;
//     var subParam = filterParams[x];
//     var fullParam = param + subParam;
//     query.params.sitelist_filter = 'match('+fullParam+'*)'; 
//     webservice['query'] = query;

// function filters(){
// 	var filters = [];
// 	for (var i = 0; i < filterParams.length; i++) {
// 		var one = filterParams[i];
// 		for (var y = 0; y < filterParams.length; y++) {
// 			var two = 'match('+ one + filterParams[y] + '*)'; 
// 			filters.push(two);
// 		}
// 	}
// 	return filters;
// }


// webservices[agencyNo];

// //var config = require('./config');

// function loopTables ( webservice, i, cb ){
//     var tbles = webservice.tables;
//     var y = 0;
//     //var mDate = moment().format('YYYY');
//     //for (var i = 0; i < tbles.length ; i++) {
    
//     var table = tbles[i];
//     log.info('calling table: ', table)        
    
//     loopFilters(webservice, y, table, function(){
//         if (i < tbles.length){
//             i++;    
//             loopTables(webservice, i, cb);
//         }    
//     });
// }


// 	// var query = webservice.query;
//  //    query.params.table_name = table;


//  //    query.params.sitelist_filter = 'match('+fullParam+'*)'; 
//  //    webservice['query'] = query;


//  