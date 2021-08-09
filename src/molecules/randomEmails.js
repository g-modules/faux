// Modules
import { randomNumber, quantityRange } from '../atoms/utils'
import { providersDict, typesDict } from '../dict/emailsDict'


// Random Emails
function randomEmails({q, firstName = 'John', lastName = 'Smith', company}) {
	try {
		let randomEmails = []
		let quantity = quantityRange(q)
		let fullName = `${firstName}.${lastName}`.toLowerCase()
		if(company) randomEmails.push({type: 'work', email: `${fullName}@${company}`})
		for (var i = 1; i <= quantity; i++) {
			let emailProvierIndex = randomNumber(0, providersDict.length-1)
			let emailTypeIndex = randomNumber(0, typesDict.length-1)
			let randomEmail = {
				type: typesDict[emailTypeIndex],
				email: `${fullName}@${providersDict[emailProvierIndex]}`
			}
			randomEmails.push(randomEmail)
		}
		return randomEmails
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomEmails }