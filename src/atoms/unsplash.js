import { secrets } from './secrets.js'


async function unsplashPhotosFromCollectionPage(collectionId, page) {
	try {
		let photos = []
		let options = {
			client_id: secrets.unsplashClienId,
			collectionId: collectionId,
			page: page
		}
		let url = `https://api.unsplash.com/collections/${options.collectionId}/photos?page=${options.page}&per_page=30&client_id=${options.client_id}`
		let request = await fetch(url, {
			method: 'get',
			mode: 'cors',
		});
		let response = await request.json();

		response.forEach(result => {
			let photo = {
				id: result.id,
				color: result.color,
				blur_hash: result.blur_hash,
				description: result.description,
				alt_description: result.alt_description,
				urls: result.urls,
				link: result.links.html,
				user: {
					username: result.user.username,
					name: result.user.name
				}
			}
			photos.push(photo)
		})
		return photos
	} catch(e) {
		console.log(e)
		return photos
	}
}

// Get Photos from Collection
async function unsplashPhotosFromCollection(collectionId, pages) {
	let photos = []
	let page
	for (page = 1; page <= pages; page++) {
		photos.push(await unsplashPhotosFromCollectionPage(collectionId, page))
	}
	return photos.flat(1)
}

// Get Photos from Collection (Short)
async function unsplashPhotosFromCollection_Short(collectionId, pages) {
	let photos = []
	let page
	for (page = 1; page <= pages; page++) {
		let originalPhotosFromPage = await unsplashPhotosFromCollectionPage(collectionId, page)
		let simplifiedPhotosFromPage = []
		originalPhotosFromPage.forEach(photo => {
			let simplifiedPhoto = {
				id: photo.id,
				blur_hash: photo.blur_hash,
				path: photo.urls.full,
				author: photo.user.name
			}
			simplifiedPhotosFromPage.push(simplifiedPhoto)
		})
		photos.push(simplifiedPhotosFromPage)
	}
	return photos.flat(1)
}

export { unsplashPhotosFromCollection, unsplashPhotosFromCollection_Short }