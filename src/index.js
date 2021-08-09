import iData from "./templates/iData"


export default async function generateData() {
	let start = Date.now()
	try {
		return await iData()
	} catch(error) {
		console.error(error)
	} finally {
		console.info(Date.now() - start + 'ms')
	}
}