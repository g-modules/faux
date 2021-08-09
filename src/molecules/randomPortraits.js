// Modules
import { randomNumber, quantityRange } from '../atoms/utils'
import { malePortraitsDict, femalePortraitsDict } from '../dict/portraitsDict'


// Random Portraits
function randomPortraits({q,gender}) {
	try {
		let quantity = quantityRange(q)
		let randomPortraits = []
		let portraitsDict = gender.sex === 'male' ? malePortraitsDict : femalePortraitsDict
		for (var i = 0; i < quantity; i++) {
			let portraitIndex = randomNumber(0, portraitsDict.length-1)
			randomPortraits.push(portraitsDict[portraitIndex])
		}
		return randomPortraits
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomPortraits }