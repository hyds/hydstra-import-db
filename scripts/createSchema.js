var through = require('through2').obj;
var levelup = require('levelup');

var baseUrl = 'http://localhost:8080/',
    makeRequest = require('request');
    //token = '2f6b43db34b1f685c99695f85f0c0f3d'; // comes from login
    //token = '55640dcd78ecc2be1214f49e;'

//var db = levelup('./tableSchemas');


module.exports = function (){
  var retrn;
  return through(function write(buffer, _, next) {
    var schema = buffer;
    try { login(schema) }
    catch(err) { return this.emit('login error',err) } 

    retrn = 'return data';
    next();
  },
  function end(cb){
    this.push(retrn, 'utf8');
    cb();
  })
}


function login(schema){
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
            for (table in schema){
                if (!schema.hasOwnProperty(table)){ continue; }
                var tableDefinition = schema[table];
                var schemaID;
                try { 
                    schemaID = createSchema(tableDefinition,token)
                }
                catch(err) { return this.emit('login error',err) } 
                 
            }  
        }
    );
}

function createSchema(schema,token){
    var req = {
            url: baseUrl + 'schemas',
            method: 'POST',
            json: {
                definition: schema
            },
            headers: {
                authorization: 'bearer ' + token
            }
        }; 

    makeRequest( req, function(error, response, body){
            if (error){console.log("error: ", error)};
            var schemaID = body.id;
            var key = 'kisters_hydstra' +'_' + schema['title'];
            createTableAssociation(key,schemaID);            
        }
    );    
}

function createTableAssociation(key,schemaID){
    // db.put(key,schemaID, function (err) {
    //     if (err) return console.log('Ooops!', err) // some kind of I/O error
    // })
}