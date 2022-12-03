// image slider animation

var slideImg = document.getElementById("slideImg");

var images = new Array (
    "../img/slide1.jpg",
    "../img/slide2.jpg",
)

let len = images.length;
let i = 0;

function slider(){
    if (i > len-1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}
