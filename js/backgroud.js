const images = ["mermaid.jpg", "nemo.jpg", "pooh.jpg","LadyAndThenTramp.jpg","zoo.png", "Rapunzel.jpg", "Rapunzel(1).jpg", "BeautyAndTheBeast.jpg", "Pocahontas.jpg", "up.jpg", "Brave.jpg", "Brave(1).jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);