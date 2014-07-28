/**
*
*	STREAM: absolute value
*
*
*	DESCRIPTION:
*		- Transform stream factory to map numeric data stream values to their absolute values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	HISTORY:
*		- 2014/07/27: Created. [AReines].
*
*
*	DEPENDENCIES:
*		[1] through2
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. athan@nodeprime.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var // Through2 module:
		through2 = require( 'through2' );


	// FUNCTIONS //

	/**
	* FUNCTION: onData( newVal )
	*	Data event handler. Returns the absolute value.
	*
	* @private
	* @param {Number} newVal - streamed data value
	* @param {String} encoding
	* @param {Function} clbk - callback to invoke upon completing transformation. Function accepts two arguments: [ error, chunk ].
	*/
	function onData( newVal, encoding, clbk ) {
		clbk( null, Math.abs( newVal ) );
	} // end FUNCTION onData()


	// STREAM //

	/**
	* FUNCTION: Stream()
	*	Stream constructor.
	*
	* @constructor
	* @returns {Stream} Stream instance
	*/
	function Stream() {
		return this;
	} // end FUNCTION Stream()

	/**
	* METHOD: stream()
	*	Returns a through stream for calculating the absolute value.
	*
	* @returns {object} through stream
	*/
	Stream.prototype.stream = function() {
		return through2({'objectMode': true}, onData );
	}; // end METHOD stream()


	// EXPORTS //

	module.exports = function createStream() {
		return new Stream();
	};

})();