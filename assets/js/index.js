"use strict";

const imagesBD = [
  "https://moderncat.com/wp-content/uploads/2015/12/Sphynx.jpg",
  "https://production-aws-wp.spotpetins.com/wp-content/uploads/2021/04/Sphynx-Cat-1024x1024.jpg",
];

const [prevBtn, nextBtn] = document.querySelectorAll(".slider-container");
const img = document.querySelector(".slider-container .slide img");

const slider = new Slider(imagesBD);

img.setAttribute("src", slider.currentSlide);
