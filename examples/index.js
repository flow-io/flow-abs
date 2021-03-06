var eventStream = require( 'event-stream' ),
	aStream = require( './../lib' );

// Create some data...
var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round(Math.random()*100) - 50;
}

// Create a readable stream:
var readStream = eventStream.readArray( data );

// Create a new absolute value stream:
var stream = aStream().stream();

// Pipe the data:
readStream.pipe( stream )
	.pipe( eventStream.map( function( d, clbk ) {
		clbk( null, d.toString()+'\n' );
	}))
	.pipe( process.stdout );