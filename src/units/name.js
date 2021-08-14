// import { randomNumber } from "@g-modules/utils"
// import dictNameFirstMale from "@dict/en-US/dictNameFirstMale.js";
// import dictNameLast from "@dict/en-US/dictNameLast.js";

const name = {
	"first": ( () => {
		// const dict = dictNameFirstMale;
		// const index = randomNumber( 0, dict.length );
		// return dict[index];
		return "First"
	})(),
	"last": ( () => {
		// const dict = dictNameLast;
		// const index = randomNumber( 0, dict.length );
		// return dict[index];
		return "Last"
	})()
};

export { name };
