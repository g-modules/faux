import { name, getItem } from "../../../src/units/name.js";


describe( "getItem:", () => {
	const dict = ["one", "two", "three"];
	const result = getItem( dict );
	test( "should return a string", () => expect( result ).toBeString() );
});

describe( "name.first:", () => {
	const result = name.first;
	test( "should return a string", () => expect( result ).toBeString() );
});

describe( "name.last:", () => {
	const result = name.last;
	test( "should return a string", () => expect( result ).toBeString() );
});


