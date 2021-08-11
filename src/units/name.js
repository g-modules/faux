import { randomNumber } from "../helpers/utils.js";
import firstNameMale from "../dict/firstNameMale.js";
import lastName from "../dict/lastName.js";


const name = {
	"first": () => {
		const index = randomNumber( 0, firstNameMale.length );
		return firstNameMale[index];
	},
	"last": () => {
		const index = randomNumber( 0, lastName.length );
		return lastName[index];
	}
};


export { name };
