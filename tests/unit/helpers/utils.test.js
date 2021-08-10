/* global describe, test, expect */
import { randomNumber, randomBool, randomId, capitalizeFirstLetter, shuffleArray, uniqObjectsInArray } from "../../../src/helpers/utils.js";


describe( "randomNumber():", () => {
	const minimum = -10;
	const maximum = 10;
	const result = randomNumber( minimum, maximum );
	test( "should return a number", () => expect( result ).toBeNumber() );
	test( "should return a number, without passing params", () => expect( randomNumber() ).toBeNumber() );
	test( "should return a value between minimum and maximum numbers, inclusive them", () => {
		expect( result ).toBeGreaterThanOrEqual( minimum );
		expect( result ).toBeLessThanOrEqual( maximum );
	});
});

describe( "randomBool():", () => {
	const chances = [-10, 0, 20, 100, null, undefined];
	chances.forEach( ( chance ) => {
		const result = randomBool( chance );
		test( `should return a boolean value: chance ${chance} => ${result}`, () => expect( result ).toBeBoolean() );
	});
});

describe( "randomId():", () => {
	const result = randomId();
	test( "should return a String", () => expect( result ).toBeString() );
	test( "should return a string.length equal 36", () => expect( result ).toHaveLength( 36 ) );
});

describe( "capitalizeFirstLetter():", () => {
	const originalString = "hello world!";
	const result = capitalizeFirstLetter( originalString );
	test( "should return a string", () => expect( result ).toBeString() );
	test( "shouldn't return an empty string", () => expect( result ).not.toBeEmpty() );
	test( "shouldn't return unchanged string", () => expect( result ).not.toBe( originalString ) );
	test( "should throw an error with empty param", () => {
		expect( () => {
			capitalizeFirstLetter();
		}).toThrow();
	});
	test( "should throw an error when not a string passing", () => {
		expect( () => {
			capitalizeFirstLetter( 42 );
		}).toThrow();
	});
});

describe( "shuffleArray():", () => {
	const originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, { "hello": "world" }, ["a", "b", "c"], undefined, null];
	const result = shuffleArray( originalArray );
	test( "should return an array", () => expect( result ).toBeArray() );
	test( "should return an array of same size", () => expect( result ).toBeArrayOfSize( originalArray.length ) );
	test( "should return an array that contain all original values", () => expect( result ).toIncludeAllMembers( originalArray ) );
	test( "shouldn't return unchanged array", () => expect( result ).not.toEqual( originalArray ) );
});

describe( "uniqObjectsInArray():", () => {
	const originalArray = [{
		"id": 1,
		"text": "hi"
	}, {
		"id": 2,
		"text": "hello"
	}, {
		"id": 3,
		"text": "hi"
	}];
	const result = uniqObjectsInArray( originalArray, "text" );
	test( "should return an array", () => expect( result ).toBeArray() );
	test( "should return an array that contain any original objects", () => expect( result ).toIncludeAnyMembers( originalArray ) );
	test( "should return same array, if value uniq", () => expect( uniqObjectsInArray( originalArray, "id" ) ).toEqual( originalArray ) );
});

