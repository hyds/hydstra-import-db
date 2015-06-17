var baseUrl = 'http://localhost:8080/',
    makeRequest = require('request');

console.log("hello world")

// Create an Account if one dosnt exist
makeRequest(
    {
        url: baseUrl + 'accounts',
        method: 'POST',
        json: {
            userName: 'admin',
            password: 'linuxminty1$',
            companyId: 'chromicon'
        }
    },
    function(error, response, body){
        if (error){console.log("error: ", error)};
        console.log("",body);
    }
);
