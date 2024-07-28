const images = ['01.jpg', '02.jpg', '03.jpg'];

const image = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(assets/${image})`;
