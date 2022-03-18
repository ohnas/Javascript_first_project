const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const body = document.querySelector("body");
const img = document.createElement("img");

function randomBack(){
    const randomImage = images[Math.floor(Math.random() * images.length)];
    img.src = `img/${randomImage}`;
    body.appendChild(img);
}

randomBack();
