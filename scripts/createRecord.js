var through = require('through2');
var baseUrl = 'http://localhost:8080/',
    makeRequest = require('request');
    //token = '2f6b43db34b1f685c99695f85f0c0f3d'; // comes from login
    //token = '55640dcd78ecc2be1214f49e;'

//module.exports = function (table){
module.exports = function (){
  var retrn;
  return through(function write(buffer, _, next) {
    var line = buffer.toString();
    var data;
    
    if (! line || line == 'undefined'){ 
        console.log('createRecord data undefined: ', line, ', next()');
        next(); 
    }
    else{
        try { 
            data  = JSON.parse(line); 
            console.log("data.schemaId: ",data.schemaId);
            //console.log("data: ",data);
        }
        catch(err) { return this.emit('data parse error',err) } 

        
        try { login(data) }
        catch(err) { return this.emit('login error',err) } 

        retrn = 'done';
        next();
    }
  },
  function end(cb){
    this.push(retrn, 'utf8');
    cb();
  })
}


function login(data){
    // Login and get a token
    makeRequest(
        {
            url: baseUrl + 'login',
            method: 'POST',
            json: {
                userName: 'admin',
                password: 'linuxminty1$'
            }
        },
        function(error, response, body){
            if (error){console.log("error: ", error)};
            var token = body.token;
            var dat = data.json;
            var schemaId = data.schemaId;
            for (row in dat){
                if (!dat.hasOwnProperty(row)){ continue; }
                var rw = dat[row];
                var recordId;
                //console.log('dat: ', dat, ', schemaId: ',schemaId, ', token: ',token);
                try { 
                    recordId = createRecord(rw, schemaId, token)
                }
                catch(err) { return this.emit('login error',err) } 
                //console.log('recordId',recordId);
                
            }  
        }
    );
}

function createRecord(data, schemaId , token){
    if (typeof(data) !== 'object'){
        console.log('not an object', data)
        data = JSON.parse(data);
    }
    
    var req = {
            url: baseUrl + 'records',
            method: 'POST',
            json: {
                data: data,
                schemaId: schemaId,
                schemaVersion: 1
            },
            headers: {
                authorization: 'bearer ' + token
            }
        }; 

    makeRequest( req, function(error, response, body){
            if (error){console.log("error: ", error)};
            var recordId = body.id;
            //console.log('recordId: ', recordId);
            return recordId;                      
        }
    );    
}



