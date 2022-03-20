const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const body = document.querySelector("body");
const bg = document.querySelector(".bg");

function randomBack(){
    const randomImage = images[Math.floor(Math.random() * images.length)];
    bg.style.backgroundImage = `url(img/${randomImage})`;
}

randomBack();
