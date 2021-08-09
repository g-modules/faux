// Modules
import { randomIds, randomTrue, quantityRange } from '../atoms/utils'
import { randomFirstNames, randomLastNames } from "../molecules/randomName"
import { randomEmails } from "../molecules/randomEmails"
import { randomPhoneNumbers } from "../molecules/randomPhoneNumbers"
import { randomCompanies } from "../molecules/randomCompanies"
// import { randomAddresses } from "../molecules/randomAddresses"
import { randomDatesInRange } from "../molecules/randomDate"
import { randomPortraits } from "../molecules/randomPortraits"
import { randomGenders } from "../molecules/randomGenders"


// Generate Random Persons Profile
function randomPersons({q}) {
	try {
		let randomPersons = []
		let quantity = quantityRange(q)
		for (var i = 0; i < quantity; i++) {
			let gender = randomGenders({q:1})[0]
			let firstName = randomFirstNames({q:1, gender})[0]
			let lastName = randomLastNames({q:1})[0]
			let company = randomCompanies({q:1})[0]
			let id = randomIds({q:1})[0]
			let created = randomDatesInRange({q:1,days:500})[0]	// a random date in the range of the last 500 days
			let favorite = randomTrue(30)
			let phones = randomPhoneNumbers({q:[1,3],code:"+1"})
			let emails = randomEmails({q:[1,3], firstName, lastName, company: company.website})
			// let addresses = randomAddresses({})
			let portrait = randomPortraits({q:1, gender})[0]
			let randomPerson = { id, created, firstName, lastName, company, favorite, phones, emails, portrait }
			randomPersons.push(randomPerson)
		}
		return randomPersons
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomPersons }