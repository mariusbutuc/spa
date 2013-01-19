var
  express = require('express'),
  app = express(),
  routes = require( './routes.js' )( app );

app.configure( function() {
  // decode forms
  app.use( express.bodyParser() );
  // enables creation of RESTful services
  app.use( express.methodOverride() );
});

app.configure( 'development', function() {
  // log requests to the console
  app.use( express.logger() );
  app.use( express.errorHandler( {
    dumpExceptions  : true,
    showStack       : true
  } ) );
});

app.configure( 'production', function () {
  // catch errors, but don't do anything with them
  app.use( express.errorHandler() );
});


app.listen(3000);
