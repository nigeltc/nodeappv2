var fs = require('fs');
var http = require('http');
var zipcode = require('zipcode');

http.createServer( function( req, res ) {
    fs.readFile( 'index.html', function( err, data ) {
	res.writeHead( 200, {'Content-Type': 'text/html'} );
	res.write( 'zip = ' + zipcode.lookup( '08540' ) );
	res.end( data );
    });
}).listen( 1337, '127.0.0.1' );
console.log( "Server listening on 1337" );

