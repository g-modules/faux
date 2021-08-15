import { name, getItem } from "../../../src/units/name.js";


describe( "getItem:", () => {
	let dict = ["one", "two", "three"]
	let result = getItem(dict);
	test( "should return a string", () => expect( result ).toBeString() );
})

describe( "name.first:", () => {
	let result = name.first;
	test( "should return a string", () => expect( result ).toBeString() );
})

describe( "name.last:", () => {
	let result = name.last;
	test( "should return a string", () => expect( result ).toBeString() );
})


