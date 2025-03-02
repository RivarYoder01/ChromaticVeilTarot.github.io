"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: Rivar Yoder
      Date: 02/17/2025 

      Filename: js05.js
*/

window.addEventListener("load", createLightbox);

function createLightbox(){
	// Lightbox Container
	let lightBox = document.getElementById("lightbox");
	
	// Parts of the lightBox
	let lbImages = document.createElement("div");
	
	// Design the lightbox images container
	lightBox.appendChild(lbImages);
	lbImages.id = "lbImages";
	
	// Add immages from the imgFiles Array to the container
	for (let i = 0; i < imgCount; i++) {
		let image = document.createElement("img");
		image.src = imgFiles[i];
		image.alt = imgCaptions[i];
		image.onclick = createOverlay;
		lbImages.appendChild(image);
	}
	
	function createOverlay() {
		let overlay = document.createElement("div");
		overlay.id = "lbOverlay";
		
		//Add figure box to the overlay
		let figureBox = document.createElement("figure");
		overlay.appendChild(figureBox);
		
		// Add the image to the figure box
		let overlayImage = this.cloneNode("true");
		figureBox.appendChild(overlayImage);
		
		//add the caption to the figure box
		let overlayCaption = document.createElement("figcaption");
		overlayCaption.textContent = this.alt;
		figureBox.appendChild(overlayCaption);
		
		// Add a close button to the overlay
		let closeBox = document.createElement("div");
		closeBox.id = "lbOverlayClose";
		closeBox.innerHTML = "&times;";
		closeBox.onclick = function() {
			document.body.removeChild(overlay);
		}
		overlay.appendChild(closeBox);
		
		document.body.appendChild(overlay);
	}
}