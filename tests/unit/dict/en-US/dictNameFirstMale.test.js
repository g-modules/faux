/* global describe, test, expect */
import dictNameFirstMale from "../../../../src/dict/en-US/dictNameFirstMale.js";

describe( "dict:", () => {
	const dict = dictNameFirstMale;
	test( "should return an Array", () => expect( dict ).toBeArray() );
});
