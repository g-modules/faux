// Modules
import { randomNumber, randomIds, randomTrue, quantityRange } from '../atoms/utils'
import { randomMessages } from '../molecules/randomTexts'

// Generate Random Conversations
function randomConversations({q,contacts}) {
	try {
		let quantity = quantityRange(q)
		let randomConversations = []
		for (var i = 0; i < quantity; i++) {
			let contactIndex = randomNumber(0,contacts.length-1)
			let contact = contacts[contactIndex]
			let messagesCount = randomNumber(1,100)
			let messages = randomMessages({q:messagesCount, p:1, s:[1,3], w:[3,7] })
			let lastMessage = messages[messages.length-1]
			let randomConversation = {
				id: randomIds({q:1})[0],
				contactID: contact.id,
				firstName:contact.firstName,
				lastName: contact.lastName,
				portrait: contact.portrait,
				phoneNumber: contact.phones[0],
				lastMessageDate: lastMessage.date,
				messages: messages
			}
			randomConversations.push(randomConversation)
		}
		return randomConversations
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomConversations }