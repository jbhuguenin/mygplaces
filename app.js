var config  = require('./config');
var fs      = require('fs');
var app     = require('express')();

app.use( require('body-parser')() );
app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
});
// Mount your api endpoint wherever you like
app.get( '/api/places-autocomplete'
, require('gplaces').proxy({
    key: config.key,
    type:'autocomplete'
  })
);

app.get( '/api/places-detail'
, require('gplaces').proxy({
    key: config.key,
    type: 'details'
  })
);

app.listen(80, function () {
    console.log('Started!');
});

