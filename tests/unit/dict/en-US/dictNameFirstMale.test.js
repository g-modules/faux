import dictNameFirstMale from "src/dict/en-US/dictNameFirstMale.js";

describe( "dict:", () => {
	let dict = dictNameFirstMale;
	test( "should return a string", () => expect( dict ).toBeArray() );
})