import { name } from "../../../src/units/name.js";


describe( "name.first:", () => {
	let result = name.first;
	test( "should return a string", () => expect( result ).toBeString() );
})