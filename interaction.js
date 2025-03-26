"use strict";
 /*
    CSC 435
	Advanced Web Development

    Author: Rivar Yoder
    Term: Spring 2025

	Application to display card gallery
    Filename: interaction.js
 */

window.addEventListener("load", createGallery);

function createGallery(){
	// Lightbox Container
	let galleryBox = document.getElementById("galleryBox");
	
	// Parts of the lightBox
	let gbImages = document.createElement("div");
	
	// Design the lightbox images container
	galleryBox.appendChild(gbImages);
	gbImages.id = "gbImages";
	
	// Add immages from the imgFiles Array to the container
	for (let i = 0; i < imgCount; i++) {
		let image = document.createElement("img");
		image.src = imgFiles[i];
		image.onclick = createOverlay;
		gbImages.appendChild(image);
	}
	
	function createOverlay() {
		let overlay = document.createElement("div");
		overlay.id = "gbOverlay";
		
		//Add figure box to the overlay
		let figureBox = document.createElement("figure");
		overlay.appendChild(figureBox);
		
		// Add the image to the figure box
		let overlayImage = this.cloneNode("true");
		figureBox.appendChild(overlayImage);
		
		// Add a close button to the overlay
		let closeBox = document.createElement("div");
		closeBox.id = "gbOverlayClose";
		closeBox.innerHTML = "&times;";
		closeBox.onclick = function() {
			document.body.removeChild(overlay);
		}
		overlay.appendChild(closeBox);
		
		document.body.appendChild(overlay);
	}
}