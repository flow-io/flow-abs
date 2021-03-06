flow-abs
========

Transform stream factory to map numeric data stream values to their absolute values.


## Installation

``` bash
$ npm install flow-abs
```

## API

To create a stream factory,

``` javascript
var absStream = require( 'flow-abs' );

// Create a new factory:
var aStream = absStream();
```

### aStream.stream()

To create a new absolute value stream,

``` javascript
var stream = aStream.stream();
```


## Usage

Methods are chainable.

``` javascript
absStream()
	.stream()
	.pipe( /* writable stream */ );
```


## Examples

``` javascript
var eventStream = require( 'event-stream' ),
	aStream = require( 'flow-abs' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions.

Assuming you have installed Mocha, execute the following command in the top-level application directory to run the tests:

``` bash
$ mocha
```

All new feature development should have corresponding unit tests to validate correct functionality.


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.

