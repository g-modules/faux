/* eslint no-console: 0 */
const logger = {
	"info": message => console.info( "\x1b[34m%s\x1b[0m", "INFO:", message ),
	"log": message => console.log( "\x1b[35m%s\x1b[0m", "LOG:", message ),
	"warn": message => console.warn( "\x1b[33m%s\x1b[0m", "WARN:", message ),
	"error": ( error ) => {
		console.log( "" );
		console.error( "\x1b[31m%s\x1b[0m", "—————————————————" );
		console.error( "\x1b[31m%s\x1b[0m", "ERROR:", error );
		console.trace( "" );
		console.error( "\x1b[31m%s\x1b[0m", "—————————————————" );
		console.log( "" );
	}
};

export { logger };
