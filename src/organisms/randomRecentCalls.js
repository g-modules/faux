// Modules
import { randomNumber, randomIds, randomTrue, quantityRange } from '../atoms/utils'
import { randomDatesInRange } from "../molecules/randomDate"


// Generate Random Recent Calls
function randomRecentCalls({q,contacts}) {
	try {
		let quantity = quantityRange(q)
		let randomRecentCalls = []
		for (var i = 0; i < quantity; i++) {
			let contactIndex = randomNumber(0,contacts.length-1)
			let contact = contacts[contactIndex]
			let outgoing = randomTrue(40)
			let missed = outgoing ? false : randomTrue(35)
			let recentCall = {
				id: randomIds({q:1})[0],
				contactID: contact.id,
				firstName:contact.firstName,
				lastName: contact.lastName,
				portrait: contact.portrait,
				phoneNumber: contact.phones[0],
				outgoing,
				missed,
				duration: missed ? 0 : randomNumber(5,300),
				date: randomDatesInRange({q:1,days:30})[0]
			}			
			randomRecentCalls.push(recentCall)
		}
		randomRecentCalls.sort((a, b) => b.date - a.date) // new calls first
		return randomRecentCalls
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomRecentCalls }