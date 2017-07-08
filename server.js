const express = require('express');
const app = express();
const path = require('path');

//console.log(getAmazonRecommendations('seed'));

app.set('port', (process.env.PORT || 2020));

app.use(express.static(path.join(__dirname, 'docs')));

app.get('/', (request, response) => {
    response.sendFile( __dirname + "/public/" + "index.html" );
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
