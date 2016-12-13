var express = require('express');
var app = express();

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
    key: 'AIzaSyA7_ZdaGC_E7uBdNlLRIwWknm2rPv8DBj0',
    type:'autocomplete'
  })
);

app.get( '/api/places-detail'
, require('gplaces').proxy({
    key: 'AIzaSyA7_ZdaGC_E7uBdNlLRIwWknm2rPv8DBj0',
    type: 'details'
  })
);

app.listen( 8080, function( error ){
  /* ... */
});
