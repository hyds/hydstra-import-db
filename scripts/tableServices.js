var config = require('../config');
var webservices = config.services;

module.exports = function (){
    var tableServices = [];
    for (var i = 0; i < webservices.length ; i++) {
        var webservice = webservices[i];
        var tables = webservice.tables;
        for (var y = 0; y < tables.length ; y++){
            var serviceTable = {}
            var table = tables[y];
            serviceTable['orgcode'] = webservice.orgcode;
            serviceTable['host'] = webservice.options.host;
            serviceTable['path'] = webservice.options.path; 
            serviceTable['table'] = table;             
            tableServices.push(serviceTable);
        }
    }
    //console.log('tableServices: ', tableServices)
    return tableServices;
}
