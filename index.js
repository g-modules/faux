/* global process */
import { name } from "./src/index.js";


console.info( `First: ${name.first}` );
console.info( `Last: ${name.last}` );


// buffer
const maxBufferSize = 3000;
const buffer = process.memoryUsage().arrayBuffers;
if ( buffer > maxBufferSize ) console.warn( `Buffer: ${buffer}` );
else console.log( `Buffer: ${buffer}` );
