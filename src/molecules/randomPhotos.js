// Modules
import { randomNumber, quantityRange } from '../atoms/utils'
import { photosDict } from '../dict/photosDict'


// Random Photos
function randomPhotos({q,album}) {
	try {
		let quantity = quantityRange(q)
		let randomPhotos = []
		for (var i = 0; i < quantity; i++) {
			let photoIndex = randomNumber(0, photosDict[album].photos.length-1)
			let photo = photosDict[album].photos[photoIndex]
			randomPhotos.push({blurhash: photo.blur_hash, thumb: photo.urls.thumb, regular: photo.urls.regular})
		}
		return randomPhotos
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { randomPhotos }