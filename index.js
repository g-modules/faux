/* global process */
import { logger } from "./src/helpers/logger.js";
import { name } from "./src/index.js";


logger.info( `First: ${name.first}` );
logger.info( `Last: ${name.last}` );


// buffer
const maxBufferSize = 3000;
const buffer = process.memoryUsage().arrayBuffers;
if ( buffer > maxBufferSize ) logger.warn( `Buffer: ${buffer}` );
else logger.log( `Buffer: ${buffer}` );
