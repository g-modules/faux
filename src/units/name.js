import { randomNumber } from "@g-modules/utils";
import dictNameFirstMale from "../dict/en-US/dictNameFirstMale.js";
import dictNameFirstFemale from "../dict/en-US/dictNameFirstFemale.js";
import dictNameLast from "../dict/en-US/dictNameLast.js";


const getItem = (dict) => {
	const index = randomNumber( 0, dict.length );
	return dict[index];
}

const name = {
	"first": ( () => Math.random() <= 0.5 ? getItem(dictNameFirstMale) : getItem(dictNameFirstFemale))(),
	"last": ( () => getItem(dictNameLast))()
};

export { name };
