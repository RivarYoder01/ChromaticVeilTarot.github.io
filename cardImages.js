"use strict";
/*    ChromaticVeilTarot.github.io

      Image List

      Filename:cardImages.js
*/

const imageGrid = document.getElementById('cardGallery');
const imageUrls = [
  '0Fool.png',
  '1Magician.png',
  '2HighPriestess.png',
  '3Empress.png',
  '4Emperor.png',
  '5Hierophant.png',
];

imageUrls.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  imageGrid.appendChild(img);
});