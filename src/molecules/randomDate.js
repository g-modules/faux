// Modules
import { randomNumber, quantityRange } from '../atoms/utils'


// Random Dates in Range (days)
function randomDatesInRange({q, days = 1}) {
	try {
		let quantity = quantityRange(q)
		let date = Date.now()
		let max = days * 86400000
		let randomDatesInRange = []
		for (var i = 1; i <= quantity; i++) {
			let past = randomNumber(1000, max)
			randomDatesInRange.push(date - past)
		}
		return randomDatesInRange
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomDatesInRange }