// Modules
import { randomNumber, randomFalse, quantityRange } from '../atoms/utils'
import { maleNamesDict, femaleNamesDict, lastNamesDict } from '../dict/namesDict'


// Random First Names
function randomFirstNames({q,gender}) {
	try {
		let quantity = quantityRange(q)
		let randomFirstNames = []
		for (var i = 0; i < quantity; i++) {
			let nameIndex = randomNumber(0, 999)
			randomFirstNames.push(gender.sex === 'male' ? maleNamesDict[nameIndex] : femaleNamesDict[nameIndex])
		}
		return randomFirstNames
	} catch (error) {
		console.error(error)
		return ["!Error"]
	}
}

// Random Last Names
function randomLastNames({q}) {
	try {
		let quantity = quantityRange(q)
		let randomFirstNames = []
		for (var i = 0; i < quantity; i++) {
			randomFirstNames.push(lastNamesDict[randomNumber(0, lastNamesDict.length-1)])
		}
		return randomFirstNames
	} catch (error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomFirstNames, randomLastNames }