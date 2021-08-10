/* global describe, test, expect */
import { logger } from "../../../src/helpers/logger.js";

// temp test
describe( "logger():", () => {
	const cases = [{
		"case": "info",
		"message": "Inform message"
	}, {
		"case": "log",
		"message": "Logging message"
	}, {
		"case": "warn",
		"message": "Attention! Warning! Achtung!"
	}, {
		"case": "error",
		"message": "Error message"
	}];
	cases.forEach( ( item ) => {
		const result = logger[item.case]( item.message );
		test( "should return a String", () => expect( result ).not.toBeString() );
	});
});

