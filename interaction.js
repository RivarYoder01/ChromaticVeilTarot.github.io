window.addEventListener("load", createGallery);

function createGallery(){
	// Lightbox Container
	let cardGallery = document.getElementById("cardGallery");
	
	// Parts of the lightBox
	let cardImages = document.createElement("div");
	
    lightBox.appendChild(cardImages);
	cardImages.id = "cardImages";
	
	// Add immages from the imgFiles Array to the container
	for (let i = 0; i < imgCount; i++) {
		let image = document.createElement("img");
		image.src = imgUrls[i];
		// image.alt = imgCaptions[i];
		// image.onclick = createOverlay;
		cardImages.appendChild(image);
	}
}