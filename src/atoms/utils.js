// ---- Utils ---- //

// Random Number
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

// Random True
function randomTrue(chance = 50) {
	return Math.random() <= chance / 100
}

// Random False
function randomFalse(chance = 50) {
	return Math.random() >= chance / 100
}

// Random 1/0
function randomIO(chance) {
	return Math.random() > chance ? 1 : 0
}

// Random ID
function randomIds(q) {
	let quantity = quantityRange(q)
	let randomIds = []
	for (var i = 0; i < quantity; i++) {
    	let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    	randomIds.push(s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4())
	}
	return randomIds
}

// Quantity Range
function quantityRange(quantity) {
	try {
		let result
		if(typeof quantity === 'number') result = quantity
		else if(Array.isArray(quantity)) result = randomNumber(quantity[0], quantity[1])
		else result = 1
		return result
	} catch(error) {
		console.error(error)
	}
}

// Capitalize
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
    }
}

function uniqObjects(array, key) {
	let unique = [...new Map(array.map(item => [item[key], item])).values()]
	return unique
}

export { randomNumber, randomTrue, randomFalse, randomIO, randomIds, quantityRange, capitalizeFirstLetter, shuffleArray, uniqObjects }