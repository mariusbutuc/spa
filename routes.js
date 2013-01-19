/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

module.exports = function( app ) {
  var objectify = function ( str ) {
    str = str.slice(0, -1);
    str = str.charAt(0).toUpperCase() +
        str.substring(1).toLowerCase();
    return str;
  };

  // Routes
  app.all( '/:object/*?', function (req, res, next) {
    res.contentType( 'json' );
    next();
  });

  // Index
  app.get( '/:object/list/', function( req, res ) {
    res.send( { title : 'List ' + req.params.object } );
  });

  // Create
  app.post( '/:object/create', function ( req, res ) {
    res.send( { title : objectify(req.params.object) + ' created' } );
  });

  // Read
  app.get( '/:object/:id([0-9]+)', function ( req, res ) {
    res.send( { title : objectify(req.params.object) +
      ' with id ' + req.params.id + ' found' } );
  });

  // Update
  app.get( '/:object/:id([0-9]+)/update', function ( req, res ) {
    res.send( { title : objectify(req.params.object) +
      ' with id ' + req.params.id + ' updated' } );
  });

  // Delete
  app.get( '/:object/:id([0-9]+)/delete', function ( req, res ) {
    res.send( { title : objectify(req.params.object) +
      ' with id ' + req.params.id + ' deleted' } );
  });
};
