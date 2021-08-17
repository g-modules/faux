import { randomNumber, randomBool } from "@g-modules/utils";
import dictNameFirstMale from "../dict/en-US/dictNameFirstMale.js";
import dictNameFirstFemale from "../dict/en-US/dictNameFirstFemale.js";
import dictNameLast from "../dict/en-US/dictNameLast.js";


const getItem = ( dict ) => {
	const index = randomNumber( 0, dict.length - 1 );
	return dict[index];
};

const name = {
	"title": () => "----",
	"prefix": () => "----",
	"first": () => randomBool() ? getItem(dictNameFirstMale) : getItem(dictNameFirstFemale),
	"middle": () => "----",
	"last": () => getItem( dictNameLast ),
	"suffix": () => "----" ,
	"nickname": () => "----",
	
};





// const name = (gender) => {
// 	const first = () => gender === "m" ? getItem(dictNameFirstMale) : getItem(dictNameFirstFemale);
// 	const last = () => getItem( dictNameLast );
// 	const suffix = () => getItem( dictNameLast );
// 	return { first, last, suffix }
// }





// class Name {
// 	constructor(quantity = 1, gender = 2) {
// 		this.names = []
// 		this.quantity = quantity
// 		this.gender = gender
// 	}
// 	name(n) {
// 		this.names = "Hi" + n
// 	}
	
// }

// const name = (quantity) => new Name(quantity)

export { name, getItem };
