var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/brave-elephant/', function(request, response){
    response.send('This is a page about brave elephants.');
});

app.listen(process.env.PORT || 4000);