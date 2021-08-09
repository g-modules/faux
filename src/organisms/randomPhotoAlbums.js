// Modules
import { randomIds, randomNumber, shuffleArray } from '../atoms/utils'
import { albumsDict } from '../dict/photosDict/albums'


// Generate Random Photo Album
// function randomPhotoAlbums({q}) {
// 	try {
// 		let albumIndex = photoAlbums[randomNumber(0, albumsDict.length-1)]
// 		let randomPhotoAlbums = []
// 		let quantity = quantityRange(q)
// 		for (var i = 0; i < quantity; i++) {
// 			let id = randomIds({q:1})[0]
// 			let photos = randomPhotos({q:[20,22], album: album.key})
// 			let title = album.title
// 			let randomPhotoAlbum = { id, title, photos }
// 			randomPhotoAlbums.push(randomPhotoAlbum)
// 		}
// 		return randomPhotoAlbums
// 	} catch(error) {
// 		console.error(error)
// 		return ["!Error"]
// 	}
// }

function allPhotoAlbums() {
	try {
		let allPhotoAlbums = []
		albumsDict.forEach(album => {
			shuffleArray(album.photos)
			let albumSize = randomNumber(1, album.photos.length-1)
			let id = randomIds({q:1})[0]
			let title = album.title
			let photos = []
			for (var i = 0; i < albumSize; i++) {
				photos.push(album.photos[i])
			}
			allPhotoAlbums.push({id, title, photos})
		})
		return allPhotoAlbums
	} catch(error) {
		console.error(error)
		return ["!Error"]
	}
}


export { allPhotoAlbums }