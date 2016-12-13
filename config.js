var local = require('./config.json');
for ( var key in local ){
  module.exports[ key ] = local[ key ];
}
