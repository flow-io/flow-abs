
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Test utilities:
	utils = require( './utils' ),

	// Module to be tested:
	absStream = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'flow-abs', function tests() {
	'use strict';

	it( 'should export a factory function', function test() {
		expect( absStream ).to.be.a( 'function' );
	});

	it( 'should calculate the absolute values of piped data', function test( done ) {
		var data, expected, aStream;

		// Simulate some data...
		data = [ -200, 0, 200, -1.4526 ];

		// Expected values:
		expected = [ 200, 0, 200, 1.4526 ];

		// Create a new absolute value stream:
		aStream = absStream().stream();

		// Mock reading from the stream:
		utils.readStream( aStream, onRead );

		// Mock piping a data to the stream:
		utils.writeStream( data, aStream );

		return;

		/**
		* FUNCTION: onRead( error, actual )
		*	Read event handler. Checks for errors and compares streamed data to expected data.
		*/
		function onRead( error, actual ) {
			expect( error ).to.not.exist;

			for ( var i = 0; i < expected.length; i++ ) {
				assert.strictEqual(
					actual[ i ],
					expected[ i ]
				);
			}
			done();
		} // end FUNCTION onRead()
	});

});