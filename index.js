// /* global process */
import { name } from "./src/index.js";


// export { name };

console.log(`
	Title: ${name.title()}
	Prefix: ${name.prefix()}
	First: ${name.first()}
	Middle: ${name.middle()}
	Last: ${name.last()}
	Suffix: ${name.suffix()}
	Nickname: ${name.nickname()}
`)


// console.log(`
// 	First: ${name().first()}
// 	Last: ${name().last()}
// 	Suffix: ${name().suffix()}
// `)

// const names = name().title().prefix().first()


// console.info( `First: ${name.first}` );
// console.info( `Last: ${name.last}` );


// // buffer
// const maxBufferSize = 3000;
// const buffer = process.memoryUsage().arrayBuffers;
// if ( buffer > maxBufferSize ) console.warn( `Buffer: ${buffer}` );
// else console.log( `Buffer: ${buffer}` );
