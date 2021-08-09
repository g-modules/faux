// Modules
import { randomNumber, quantityRange } from '../atoms/utils'
import { typesDict } from '../dict/phonesDict'


// Random Phone Number
function randomPhoneNumbers({q, countryCode = '+1'}) {
	try {
		let randomPhoneNumbers = []
		let quantity = quantityRange(q)
		for (var i = 1; i <= quantity; i++) {
			let phoneTypeIndex = randomNumber(0, typesDict.length-1)
			let areaCode = randomNumber(1e2, 9e2).toString()
			let subscriberNumber = randomNumber(1e6, 9e6).toString()
			let formattedSubscriberNumber = subscriberNumber.substring(0, 3) + '-' + subscriberNumber.substring(3)
			let randomPhoneNumber = {
				type: typesDict[phoneTypeIndex],
				raw: countryCode + areaCode + subscriberNumber,
				formatted: `${countryCode} (${areaCode}) ${formattedSubscriberNumber}`
			}
			randomPhoneNumbers.push(randomPhoneNumber)
		}
		return randomPhoneNumbers
	} catch(error) {
		console.error(error)
		return ['!Error']
	}
}


export  { randomPhoneNumbers }