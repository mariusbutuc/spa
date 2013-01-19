/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

var
  express = require( 'express' ),
  http    = require( 'http' ),
  jade    = require( 'jade' ),
  app     = express(),
  server  = http.createServer(app),
  io      = require( 'socket.io' ).listen( server ),
  routes  = require( './routes.js' )( app ),
  port    = process.env.PORT || 1337,
  count   = 0,
  countUp = function () {
    count++;
    console.log( count );
    io.sockets.send( count );
  }
;

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

app.use( express.static( __dirname + '/' ) );
app.set('views', __dirname + '/views' );
app.set('view engine', 'jade');

app.get( '/', function( req, res ){
  res.render( 'index' );
});


setInterval( countUp, 1000 );

server.listen(port, function() {
 console.log( 'Listening on ' + port );
});
