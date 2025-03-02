const imageGrid = document.getElementById('imageGrid');
const imageUrls = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
];

imageUrls.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  imageGrid.appendChild(img);
});